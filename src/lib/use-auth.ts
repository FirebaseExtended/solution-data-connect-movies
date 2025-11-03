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

import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, dc } from "./firebase";
import { updateUser } from "../../generated/data";

export function useAuth() {
	const [isLoading, setIsLoading] = useState(false);
	const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);

	useEffect(() => {
		return onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setIsLoading(false);
		});
	}, []);

	return { user: currentUser, isLoading };
}
onAuthStateChanged(auth, async (user) => {
  if (user && !localStorage.getItem("savedUser")) {
    await updateUser(dc, {
      username: (user.email?.split("@")[0])!,
      displayName: user.displayName,
      imageUrl: user.photoURL,
    });
    localStorage.setItem("savedUser", "true");
  }
});
