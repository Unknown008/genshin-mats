foreach file [glob weapons/*] {
	file rename $file [regsub {%27} [regsub {Weapon_} $file ""] "'"]
}