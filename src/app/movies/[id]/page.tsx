/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Movie details page component
 * Displays movie information, cast, and reviews
 */

import { dc } from "@/lib/firebase";
import { moviePage } from "@app/data";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Review from "@/components/review";
import WatchDialogWrapper from "@/components/watch-dialog-wrapper";
import MovieRating from "@/components/movie-rating";

// Define the page props to get the movie ID from the URL params
interface MoviePageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function MovieDetailsPage(props: MoviePageProps) {
    const params = await props.params;
    // Fetch movie data using the moviePage method
    const result = await moviePage(dc, { movieId: params.id });
    const movie = result.data.movie;

    // If movie not found, show error message
    if (!movie) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen">
				<h1 className="text-2xl font-bold">Movie not found</h1>
				<p>The movie you're looking for doesn't exist or has been removed.</p>
			</div>
		);
	}

    // Extract release year from the date
    const releaseYear = new Date(movie.releaseDate).getFullYear();

    // Function to format poster URL based on size
    function urlFromSize(
		posterUrl: string,
		size: "small" | "medium" | "full" = "medium",
	) {
		switch (size) {
			case "small":
				return posterUrl.replace(".jpg", "-300x400.jpg");
			case "medium":
				return posterUrl.replace(".jpg", "-600x800.jpg");
			default:
				return posterUrl;
		}
	}

    return (
		<div className="max-w-5xl mx-auto p-4">
			<div className="flex flex-col md:flex-row gap-8">
				{/* Movie poster */}
				<div className="w-full md:w-1/3">
					<div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg border border-border">
						<Image
							src={urlFromSize(movie.posterUrl, "medium")}
							alt={`${movie.title} poster`}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 33vw"
						/>
					</div>

					{/* Log a Watch button */}
					<div className="mt-4">
						<WatchDialogWrapper movie={movie} />
					</div>
				</div>

				{/* Movie details */}
				<div className="w-full md:w-2/3">
					<div className="flex items-baseline gap-3 mb-4">
						<h1 className="text-4xl font-bold">{movie.title}</h1>
						<MovieRating
							rating={movie.rating}
							className="self-center text-md px-2"
						/>
						<span className="text-2xl text-muted-foreground">
							{releaseYear}
						</span>
					</div>

					{/* Movie description - using placeholder text since it's not in the data */}
					<p className="text-muted-foreground mb-8">{movie.description}</p>

					{/* Cast section */}
					<h2 className="text-2xl font-bold mb-4">Cast</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
						{movie.roles.map((role: any, index: number) => (
							<div
								key={index}
								className="flex flex-col items-center text-center"
							>
								<Avatar className="w-16 h-16 mb-2">
									<AvatarImage
										src={role.actor.imageUrl}
										alt={role.actor.name}
									/>
									<AvatarFallback>
										{role.actor.name
											.split(" ")
											.map((n: string) => n[0])
											.join("")
											.toUpperCase()
											.substring(0, 2)}
									</AvatarFallback>
								</Avatar>
								<div className="text-sm font-medium">{role.actor.name}</div>
								<div className="text-xs text-muted-foreground">
									{role.character || "Unknown Role"}
								</div>
							</div>
						))}
					</div>

					{/* Reviews section */}
					<h2 className="text-2xl font-bold mb-4">Reviews</h2>
					<div className="space-y-4">
						{movie.reviews && movie.reviews.length > 0 ? (
							movie.reviews.map((review: any, index: number) => (
								<Review
									key={index}
									user={{ username: review.user.username }}
									rating={review.rating}
									reviewText={review.review || ""}
									variant="minimal"
								/>
							))
						) : (
							<p className="text-muted-foreground">No reviews yet.</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
