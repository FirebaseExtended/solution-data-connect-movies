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

"use client";

/**
 * Review component that displays a user's movie review
 * Has two variants:
 * - default: Shows movie title, poster, user info, rating, and review text
 * - minimal: Shows only user info, rating, and review text (no movie title or poster)
 */

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import MoviePoster, { type Movie } from "@/components/movie-poster";
import MovieRating from "./movie-rating";

export interface ReviewProps {
	user: {
		username: string;
		avatarUrl?: string;
	};
	movie?: Movie;
	/**
	 * Integer between 0-10 corresponding to a star rating
	 * (0 = 0 stars, 5 = 2.5 stars, 10 = 5 stars)
	 */
	rating: number;
	reviewText: string;
	reviewTime?: string;
	variant?: "default" | "minimal";
	className?: string;
}

export default function Review({
	user,
	movie,
	rating,
	reviewText,
	reviewTime,
	variant = "default",
	className,
}: ReviewProps) {
	// Only show movie info in default variant
	const showMovieInfo = variant === "default" && movie;

	// Get initials for avatar fallback
	const initials = user.username
		.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase()
		.substring(0, 2);

	// Convert rating from 0-10 scale to star value (0-5)
	const starValue = rating / 2;

	// Get release year if movie is provided
	const releaseYear = movie ? new Date(movie.releaseDate).getUTCFullYear() : null;

	// Generate star rating display (filled, half, and empty stars)
	const renderStars = () => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= Math.floor(starValue)) {
				// Full star
				stars.push(<FilledStarIcon key={i} className="h-4 w-4 text-accent" />);
			} else if (i - 0.5 <= starValue) {
				// Half star
				stars.push(<HalfStarIcon key={i} className="h-4 w-4 text-accent" />);
			} else {
				// Empty star
				stars.push(<EmptyStarIcon key={i} className="h-4 w-4 text-muted" />);
			}
		}
		return stars;
	};

	// Format review time if provided
	const formattedTime = reviewTime
		? new Date(`${reviewTime}Z`).toLocaleDateString("en-GB", {
			timeZone: "UTC",
		  })
		: null;

	// Generate a consistent color for the avatar based on the username
	const getAvatarColorClasses = (username: string) => {
		// Use a simple hash function to get a consistent number from the username
		const hash = username
			.split("")
			.reduce((acc, char) => acc + char.charCodeAt(0), 0);

		// Define a variety of dark colors that work well with white text
		const colors = [
			"bg-[#3b82f6]", // blue
			"bg-[#8b5cf6]", // purple
			"bg-[#ec4899]", // pink
			"bg-[#10b981]", // emerald
			"bg-[#f59e0b]", // amber
			"bg-[#ef4444]", // red
			"bg-[#6366f1]", // indigo
			"bg-[#14b8a6]", // teal
			"bg-[#f97316]", // orange
			"bg-[#8b5cf6]", // violet
		];

		// Use the hash to select one of the colors
		return `${colors[hash % colors.length]} text-white`;
	};

	const avatarColorClasses = getAvatarColorClasses(user.username);

	return (
		<Card
			className={cn(
				"overflow-hidden bg-card text-card-foreground p-0",
				className,
			)}
		>
			<div className="flex relative">
				{/* Movie poster (only in default variant) */}
				{showMovieInfo && (
					<div className="w-20 ml-2 mt-2">
						<MoviePoster variant="minimal" movie={movie} size="small" />
					</div>
				)}

				<div className="flex flex-col flex-1 p-3">
					{/* Movie title and year (only in default variant) */}
					{showMovieInfo && (
						<div className="flex items-baseline gap-2 mb-2">
							<h3 className="text-lg font-bold">{movie.title}</h3>
							<MovieRating rating={movie.rating} />
							{releaseYear && (
								<span className="text-muted-foreground">{releaseYear}</span>
							)}
						</div>
					)}

					{/* Review time (if provided) */}
					{formattedTime && (
						<div className="absolute top-2 right-2">
							<span className="text-xs text-muted-foreground">
								{formattedTime}
							</span>
						</div>
					)}

					{/* User info and rating */}
					<div className="flex items-center gap-2 mb-2">
						<Avatar className={cn("h-6 w-6", avatarColorClasses)}>
							{user.avatarUrl ? (
								<AvatarImage src={user.avatarUrl} alt={user.username} />
							) : (
								<AvatarFallback
									className={cn("text-xs font-bold", avatarColorClasses)}
								>
									{initials}
								</AvatarFallback>
							)}
						</Avatar>
						<span className="text-sm font-medium">{user.username}</span>
						<div className="flex items-center ml-1">{renderStars()}</div>
					</div>

					{/* Review text */}
					<p className="text-sm text-muted-foreground mb-2">{reviewText}</p>
				</div>
			</div>
		</Card>
	);
}

// Filled star icon
function FilledStarIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentColor"
			stroke="none"
			{...props}
		>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>
	);
}

// Empty star icon
function EmptyStarIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>
	);
}

// Half star icon
function HalfStarIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			{...props}
		>
			<defs>
				<linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="50%" stopColor="currentColor" />
					<stop offset="50%" stopColor="transparent" />
				</linearGradient>
			</defs>
			<polygon
				points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
				fill="url(#halfStarGradient)"
				stroke="currentColor"
				strokeWidth="1"
			/>
		</svg>
	);
}
