

// Create a distanceToNearestVowel function

BEGIN 
    INITIALIZE an empty ARRAY as container of the index values of the STRING.
    INITIALIZE an empty ARRAY of distances to the nearest vowel. 

    FOR LOOP - loop through the STRING to find vowel indexes using the helper function isVowel and push them to the empty ARRAY.

    FOR LOOP - loop through the STRING to check the distances of the vowels using the vowel indexes relative to the consonants that come before or after the vowel/s.

    RETURN an updated ARRAY of distances to the nearest vowel.

END

// HELPER FUNCTION

CREATE a helper function - isVowel that checks whether a letter is a vowel of not**
    IF vowel (a,e,i,o,u)
        Return TRUE
    ELSE 
        Return FALSE