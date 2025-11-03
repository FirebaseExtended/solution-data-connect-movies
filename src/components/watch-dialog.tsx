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
 * Watch Dialog Component
 * Renders a popup dialog for logging a movie watch with date and format options
 */

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import MoviePoster from "@/components/movie-poster";
import StarRating from "@/components/star-rating";
import { cn } from "@/lib/utils";
import { submitWatch } from "@/lib/data-helpers";
import { toast } from "sonner";
import { WatchDialogProps } from "./watch-dialog-wrapper";

// Watch format options

export default function WatchDialog({
  movie,
  onSubmit,
  children,
}: WatchDialogProps) {
  // State for the dialog
  const [open, setOpen] = useState(false);

  // Form state
  const [watchDate, setWatchDate] = useState<Date>(new Date());
  const [watchFormat, setWatchFormat] = useState<string | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");

  // Handle form submission
  const handleSubmit = async () => {
    if (onSubmit) {
      onSubmit({
        movieId: movie.id,
        watchDate,
        format: watchFormat,
      });
    }

    await submitWatch({
      movieId: movie.id,
      watchDate,
      watchFormat,
      rating,
      reviewText,
    });

    toast(`Added '${movie.title}' to your watch history.`);
    setOpen(false);
  };

  // Extract release year from the date
  const releaseYear = new Date(movie.releaseDate).getFullYear();

  // Format date display
  const formatDateDisplay = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const dateToCheck = new Date(date);
    dateToCheck.setHours(0, 0, 0, 0);

    if (dateToCheck.getTime() === today.getTime()) {
      return "Today";
    } else if (dateToCheck.getTime() === yesterday.getTime()) {
      return "Yesterday";
    } else {
      return format(date, "MMM dd, yyyy");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className="w-full" size="lg">
            Log a Watch
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">Log a Watch</DialogTitle>
        </DialogHeader>

        <div className="flex gap-6">
          {/* Movie poster */}
          <div className="w-40">
            <MoviePoster movie={movie} variant="minimal" size="medium" />
          </div>

          <div className="w-2/3 space-y-6">
            {/* Movie title and year */}
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl font-bold">{movie.title}</h2>
              <span className="text-xl text-muted-foreground">
                {releaseYear}
              </span>
            </div>

            {/* Date picker */}
            <div className="space-y-2">
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-2",
                      !watchDate && "text-muted-foreground",
                    )}
                  >
                    <span>{formatDateDisplay(watchDate)}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={watchDate}
                    onSelect={(date) => {
                      if (date) {
                        setWatchDate(date);
                        setCalendarOpen(false);
                      }
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Watch format */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">How did you watch?</h3>
              <div className="flex gap-2">
                {[
								  { id: "theater", label: "Theater" },
								  { id: "home", label: "Home" },
								  { id: "mobile", label: "Mobile" },
							  ].map((option) => (
                  <Button
                    key={option.id}
                    variant={watchFormat === option.id ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setWatchFormat(option.id)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Review section */}
            <div className="space-y-2 mt-4">
              <h3 className="text-lg font-medium">Add a review</h3>

              {/* Star rating */}
              <div className="flex flex-col gap-2 mb-2">
                <div className="flex items-center bg-primary-foreground/10 rounded-md p-2">
                  <StarRating rating={rating} onRatingChange={setRating} />
                  <span className="text-sm ml-2">
                    {rating > 0
                      ? `${rating / 2} out of 5 stars`
                      : "Click to rate"}
                  </span>
                </div>
              </div>

              {/* Review text */}
              <Textarea
                placeholder="Write your review here..."
                className="min-h-[100px] resize-none"
                value={reviewText}
                onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setReviewText(e.target.value)
                }
              />
            </div>
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button
            className="w-24"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button className="w-24" variant="default" onClick={handleSubmit}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
