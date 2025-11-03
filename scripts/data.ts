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
import { addReview, addWatch } from "@/generated/data";
import { dc } from "@/lib/firebase";

export const USERNAMES = [
  "cinemaScout",
  "flickFanatic88",
  "reelReviews",
  "movieMaven22",
  "theFlickPick",
  "screenSage",
  "projectorPro",
  "filmFinder007",
  "criticCorner",
  "silverScreenSage",
  "theViewingVault",
  "lensLover",
  "boxOfficeBuzz",
  "hollywoodHype",
  "indieInsider",
  "sceneStealer99",
  "reelTalk",
  "cinemaCentral",
  "filmFanatic5",
  "theMovieManic",
  "frameByFrame",
  "popcornPro",
  "digitalDivaFilm",
  "theCriticCollective",
  "picturePerfectReview",
  "screenSiren",
  "cinematicSavant",
  "movieMatrix",
  "theFilmForum",
  "pixelPundit",
  "reelRundown",
  "flickFix",
  "cinemaScopeReviews",
  "theMovieMind",
  "scriptSleuth",
  "plotPilot",
  "takeTwoReviews",
  "curtainCallCritic",
  "starStruckViewer",
  "flashbackFilm",
  "thePremierePro",
  "movieMuse",
  "reelReactions",
  "cinemaWhisperer",
  "frameFocus",
  "boxOfficeBrain",
  "theSilverScreening",
  "flickerFinder",
  "indieInsights",
  "sceneSampler",
  "movieMagicMoments",
  "storySeeker7",
  "theClosingCredits",
  "cinemaConnoisseur",
  "filmFan247",
  "reviewRanger",
  "projectorPulse",
  "theCinephileFile",
  "viewFromTheAisle",
  "hollywoodInsider2",
  "indieFilmFan",
  "behindTheReel",
  "theScreenScene",
  "movieNerd91",
  "filmCritic4Hire",
  "spoilerSentinel",
  "theMoviegoer",
  "reelReviewer",
  "cinematicJunkie",
  "popcornCritic",
  "digitalFilmBuff",
  "theReviewRoundup",
  "pictureThisReviews",
  "screenGazer",
  "movieMinute",
  "theFilmFactor",
  "pixelPerfectFilm",
  "flickerFacts",
  "cinemaSavvy",
  "scriptReader2000",
  "plotPerfectionist",
  "theTakeAway",
  "premierePartyPro",
  "movieMaestro",
  "rewindReview",
  "cinemaScribe",
  "frameRateFanatic",
  "movieBuff83",
  "viewpointVault",
  "reelDealReviews",
  "focusFeaturesFan",
  "boxOfficeBuster",
  "silverScreenStories",
  "indieFilmFinder",
  "thePlotThickens",
  "screenSavant77",
  "cinemaExplorer",
  "movieMindset",
  "theRedCarpetReview",
  "filmFanaticForever",
  "theFlickeringScreen",
  "cinemaQuest",
  "movieMogul23",
  "reelWisdom",
  "projectorPlay",
  "filmFicionado",
  "criticOnTheCouch",
  "screenScribe7",
  "cinematicVoyage",
  "theMovieVerse",
  "pixelPerspective",
  "flickerReport",
  "cinemaSutra",
  "theMovieOracle",
  "scriptScholar",
  "plotPointer",
  "take27Reviews",
  "curtainCallCommentary",
  "starryEyedViewer",
  "flashFrameFilm",
  "thePremierePerspective",
  "movieMystic",
  "reelReflections",
  "cinemaWhispers",
  "frameByFrameFocus",
  "boxOfficeBrainiac",
  "silverScreenSpectacle",
  "flickerForecast",
  "indieInsights22",
  "sceneSpectator",
  "movieMagicReviewer",
  "storySleuth42",
  "closingCreditsCrew",
  "cinemaConnoisseurship",
  "filmFanatic2024",
  "reviewRaider",
  "projectorProjections",
  "cinephileChronicles",
  "viewFromBalcony",
  "hollywoodHappenings",
  "indieFilmFocus",
  "behindTheScenesBuzz",
  "screenSceneReport",
  "movieNerdNetwork",
  "filmCriticFeedback",
  "spoilerShield",
  "theMoviegoerGuide",
  "reelReviewRundown",
  "cinematicChaser",
  "popcornPunditry",
  "digitalFilmDigest",
  "reviewRepository",
  "pictureShowPro",
  "screenGazerGazette",
  "movieMinutes",
  "theFilmFrontier",
  "pixelatedPictures",
  "flickerFactsFinder",
  "cinemaSavvyScout",
  "scriptSecrets",
  "plotPrognosis",
  "takeActionReviews",
  "finalCutCritic",
  "starSearcher",
  "retroReel",
  "openingNightObserver",
  "movieMavenMind",
  "replayReviews",
  "cinemaScribeSociety",
  "frameRateFan",
  "movieBuffBulletin",
  "viewpointVisions",
  "reelDealRatings",
  "focusFeaturesFacts",
  "boxOfficeBeat",
  "silverScreenSynopsis",
  "indieImpact",
  "plotTwistTracker",
  "screenSageSays",
  "cinemaExplorerExpeditions",
  "movieMindMeld",
  "redCarpetRoundup",
  "filmFanaticFrenzy",
  "flickerFusion",
  "sceneSleuth",
  "movieMosaic",
  "storySpectrum",
  "theCreditsRoll",
  "cinemaCircle",
  "filmFervor",
  "reviewRiot",
  "projectorPanorama",
  "cinephileCanvas",
  "viewFromRow4",
  "indieOutlook",
  "screenScoop",
  "movieNerdNation",
  "criticCollectiveVoice",
  "theSpoilerZone",
  "reelReactionReview",
  "cinemaCompendium",
  "digitalDramatist",
  "theReviewReactor",
  "popcornProphecies",
];
export async function submitWatch({
  movieId, watchDate, watchFormat, rating, reviewText,
}: {
  movieId: string;
  watchDate: Date;
  watchFormat?: string;
  rating: number;
  reviewText: string;
}) {
  let reviewId;

  // Only create a review if the user has set a rating
  if (rating > 0) {
    // Create the review first
    const reviewData = await addReview(dc, {
      movieId,
      rating,
      review: reviewText.trim() || null,
    });

    // Extract the review ID from the response
    reviewId = reviewData.data.review.id;
  }

  // Then create the watch with the review ID if available
  await addWatch(dc, {
    movieId: movieId,
    format: watchFormat,
    watchDate: watchDate.toISOString().substring(0, 10),
    reviewId: reviewId,
  });
}
