import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const UserAccountForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [university, setUniversity] = useState('');
  const [year, setYear] = useState('1st');
  const [major, setMajor] = useState('');
  const [distance, setDistance] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [roommatePref, setRoommatePref] = useState('No Roommate');
  const [pets, setPets] = useState(false);
  const [femaleHousehold, setFemaleHousehold] = useState(false);
  const [lgbtqFriendly, setLgbtqFriendly] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [safe, setSafe] = useState(false);
  const [pool, setPool] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleRoommatePreference = (e) => {
    setRoommatePref(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!gender) {
      setError('Please select a gender.');
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "users"), {
        username,
        password,
        name,
        email,
        gender,
        university,
        year,
        major,
        distance,
        minPrice,
        maxPrice,
        roommatePref,
        pets,
        femaleHousehold,
        lgbtqFriendly,
        safe,
        pool,
        furnished
      });
      console.log("Document written with ID: ", docRef.id);
      localStorage.setItem('userid', docRef.id);
      navigate('/')
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Create Account</h1>
        <p>Already have an account? <a href="/login">Log in</a></p>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <h2>Personal Information</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <legend>Gender</legend>
          <div>
            <input
              id="female"
              name="gender"
              type="radio"
              value="Female"
              onChange={handleGenderChange}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              id="male"
              name="gender"
              type="radio"
              value="Male"
              onChange={handleGenderChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="transgender"
              name="gender"
              type="radio"
              value="Transgender"
              onChange={handleGenderChange}
            />
            <label htmlFor="transgender">Transgender</label>
          </div>
          <div>
            <input
              id="nonbinary"
              name="gender"
              type="radio"
              value="Non-binary"
              onChange={handleGenderChange}
            />
            <label htmlFor="nonbinary">Non-binary</label>
          </div>
          <div>
            <input
              id="other"
              name="gender"
              type="radio"
              value="Other"
              onChange={handleGenderChange}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div>
          <label htmlFor="university">University</label>
          <select
            id="university"
            name="university"
            value={university}
            onChange={handleUniversityChange}
            required
          >
            <option value="UC Irvine">UC Irvine</option>
            <option value="UC Los Angeles">UC Los Angeles</option>
            <option value="UC Riverside">UC Riverside</option>
            <option value="CSU Long Beach">CSU Long Beach</option>
            <option value="USC">USC</option>
          </select>
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <select
            id="year"
            name="year"
            value={year}
            onChange={handleYearChange}
            required
          >
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th+">5th+</option>
          </select>
        </div>
        <div>
          <label htmlFor="major">Major</label>
          <input
            type="text"
            name="major"
            id="major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            required
          />
        </div>
        <h2>Housing Preferences</h2>
        <div>
          <label htmlFor="distance-pref">Maximum Distance from School (in miles)</label>
          <input
            type="number"
            name="distance-pref"
            id="distance-pref"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rent Price Range</label>
          <div>
            <label htmlFor="price-range-min">Min</label>
            <input
              type="number"
              name="price-range-min"
              id="price-range-min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="price-range">Max</label>
            <input
              type="number"
              name="price-range"
              id="price-range"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="roommate-type">Roommate Preference</label>
          <select
            id="roommate-type"
            name="roommate-type"
            value={roommatePref}
            onChange={handleRoommatePreference}
            required
          >
            <option value="No Roommate">No Roommate</option>
            <option value="Prefer Female">Prefer Female</option>
            <option value="Prefer Male">Prefer Male</option>
            <option value="Open to Any">Open to Any</option>
          </select>
        </div>
        <fieldset>
          <legend>Other Preferences</legend>
          <div>
            <input
              id="petfriendly"
              name="petfriendly"
              type="checkbox"
              checked={pets}
              onChange={(e) => setPets(e.target.checked)}
            />
            <label htmlFor="petfriendly">Pet-Friendly</label>
          </div>
          <div>
            <input
              id="all-female"
              name="all-female"
              type="checkbox"
              checked={femaleHousehold}
              onChange={(e) => setFemaleHousehold(e.target.checked)}
            />
            <label htmlFor="all-female">All-Female Household</label>
          </div>
          <div>
            <input
              id="lgbtq"
              name="lgbtq"
              type="checkbox"
              checked={lgbtqFriendly}
              onChange={(e) => setLgbtqFriendly(e.target.checked)}
            />
            <label htmlFor="lgbtq">LGBTQ-Friendly</label>
          </div>
          <div>
            <input
              id="safe"
              name="safe"
              type="checkbox"
              checked={safe}
              onChange={(e) => setSafe(e.target.checked)}
            />
            <label htmlFor="safe">Safe at Night</label>
          </div>
          <div>
            <input
              id="furnished"
              name="furnished"
              type="checkbox"
              checked={furnished}
              onChange={(e) => setFurnished(e.target.checked)}
            />
            <label htmlFor="furnished">Furnished</label>
          </div>
          <div>
            <input
              id="prefer-pool"
              name="prefer-pool"
              type="checkbox"
              checked={pool}
              onChange={(e) => setPool(e.target.checked)}
            />
            <label htmlFor="prefer-pool">Prefer Pool</label>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserAccountForm;
