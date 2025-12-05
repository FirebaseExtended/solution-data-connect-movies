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

import { redirect } from "next/navigation";
import MoviePoster, { Movie as BaseMovie } from "@/components/movie-poster";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchMovies } from "@app/data";
import { dc } from "@/lib/firebase";
import MovieRating from "@/components/movie-rating";

// Extend the Movie interface to include description
interface Movie extends BaseMovie {
	description: string;
}

// Search page that uses query param ?q to perform a search
// Currently uses mock data but could be connected to a real API

export default async function SearchPage(props: { searchParams: Promise<{ q?: string }> }) {
    const searchParams = await props.searchParams;
    const query = searchParams.q;
    if (!query) redirect("/");

    const {
		data: { movies },
	} = await searchMovies(dc, { query });

    // Extract release year from the date
    const getYear = (dateString: string) => {
		return new Date(dateString).getFullYear();
	};

    return (
		<div className="max-w-3xl py-8 mx-auto">
			{/* Search results */}
			<div>
				<h1 className="text-2xl font-semibold mb-4">
					{query ? `Search results for "${query}"` : "All Movies"}
				</h1>

				{movies.length === 0 ? (
					<p className="text-muted-foreground">
						No movies found matching your search.
					</p>
				) : (
					<div className="space-y-4">
						{movies.map((movie) => (
							<div
								key={movie.id}
								className="flex flex-col md:flex-row gap-6 p-4 rounded-lg border"
							>
								{/* Movie poster */}
								<div className="flex-shrink-0 w-32">
									<MoviePoster
										movie={movie}
										className="w-32"
										variant="minimal"
										size="small"
									/>
								</div>

								{/* Movie details */}
								<div className="flex flex-col">
									<h3 className="text-2xl font-bold flex space-x-2 items-center">
										{movie.title}{" "}
										<MovieRating rating={movie.rating} className="ml-2" />
										<span className="text-muted-foreground font-normal">
											({getYear(movie.releaseDate)})
										</span>
									</h3>
									<div className="text-sm text-muted-foreground mb-2">
										{movie.genre} •{" "}
										{movie.stats?.avgRating
											? `${(movie.stats.avgRating / 2).toFixed(1)}/5`
											: "No rating"}
									</div>
									<p className="mt-2">{movie.description}</p>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
