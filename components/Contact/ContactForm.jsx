"use client";
import { useState, useEffect } from "react";
export default function ContactForm() {
  const [countries, setCountries] = useState([]); //countries variables
  const [text, setText] = useState(""); //text variables
  const [search, setSearch] = useState(""); //search variables
  const [showDropdown, setShowDropdown] = useState(false); //tel dropdown variables
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const maxWords = 50; // Max words allowed
  const maxChars = 200; // Max characters allowed
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox
  const [loading, setLoading] = useState(false); //set loading
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+250",
    flag: "",
    name: "Rwanda",
  }); //selectedCountry variables

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  }); //form variables

  //fetchCountry function
  useEffect(() => {
    // Fetch country data from the API
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const countryData = data
          .filter(
            (country) =>
              country.idd?.root && country.idd.suffixes && country.flags?.png
          )
          .map((country) => ({
            code: country.idd.root + (country.idd.suffixes?.[0] || ""),
            flag: country.flags.png,
            name: country.name.common,
          }));
        setCountries(countryData);
        // Set Nigeria as the default selected country
        const rwanda = countryData.find((c) => c.code === "+250");
        if (rwanda) setSelectedCountry(rwanda);
      });
  }, []);

  //handleCountryChange function
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  //textarea function 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextChange = (e) => {
    let inputText = e.target.value;
    let words = inputText.trim().split(/\s+/).filter((word) => word !== "");
    let charCount = inputText.length;

    if (charCount <= maxChars && words.length <= maxWords) {
      setText(inputText);
      setFormData({ ...formData, message: inputText });
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Update the checkbox state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);
    const payload = {
      ...formData,
      countryCode: selectedCountry.code,
    };

    fetch("http://localhost/heelheid/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage("Message sent successfully!");
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
          setText("");
          setLoading(false);
        } else {
          setErrorMessage("Failed to send message. Please try again later.");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Failed to send message. Please try again later.");
        setLoading(false);
      });
  };

  // Modal Toggle
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  

  return (



    <div className="w-fit m-auto p-2">

      <div className="w-fit mb-9 ">

        <h1 className="text-[48px] leading-[2cm] font-bold tracking-wide" style={{fontFamily:"AvenirBold"}}>Contact</h1>

        <p className="lg:text-[16px] ">Our friendly team would love to hear from you.</p>

      </div>

      <form className="flex flex-col space-y-4 w-full max-w-lg " onSubmit={handleSubmit}>

          <div className="flex gap-2">

            <div>
              <label>First name</label>
              <input
                type="text"
                placeholder="Elizabeth"
                className="flex-1 p-2 border rounded-md focus:ring focus:outline-none w-full"
                name="firstName"
                onChange={handleChange}
                required
              /> 
            </div>

            <div>
              <label>Last name</label>
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 p-2 border rounded-md focus:ring focus:outline-none w-full"
                name="lastName"
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full p-2 border rounded-md focus:ring focus:outline-none"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label>Phone Number</label>
            <div className="flex items-center border rounded-md p-2 space-x-2">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center space-x-2 p-2 focus:outline-none"
                  // onClick={() => {
                  //   /* Optional: Add a modal/dropdown to select the country */
                  // }}

                onClick={() => setShowDropdown(!showDropdown)}
                >
                  <img
                    src={selectedCountry.flag || null}
                    alt="Flag"
                    className="w-6 h-4 rounded-md"
                  />
                  
                  <span className="text-sm font-medium">{selectedCountry.code}</span>
                </button>

                {showDropdown && (
                <div className="absolute top-12 left-0 bg-white border shadow-md max-h-60 overflow-y-auto w-44 z-10">
                  <input
                    type="text"
                    placeholder="Search country..."
                    className="w-full p-2 border-b"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
              {countries
                    .filter((c) =>
                      c.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((country) => (
                      <div
                        key={`${country.code}-${country.name}`}
                        className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleCountryChange(country)}
                      >
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-6 h-4 mr-2"
                        />
                        <span>{country.name} ({country.code})</span>
                      </div>
                    ))}
                </div>
              )}
                </div>

                <input
                  type="tel"
                  placeholder="8143516481"
                  className="flex-1 p-2 focus:ring focus:outline-none"
                  name="phone"
                  onChange={handleChange}
                  required
                />
            </div>
          </div>
            
          <div>

            <label>Message</label>
            
            <textarea
              placeholder="Type your text here..."
              className="w-full p-2 border rounded-md focus:ring focus:outline-none h-24 resize-none"
              value={text}
              name="message"
              onChange={handleTextChange}
              required
            />
            {/* <p className="text-sm text-gray-500 mt-1">
              {text.length} / {maxChars} characters | {text.split(/\s+/).filter(word => word !== "").length} / {maxWords} words
            </p> */}
            
          </div>

          <div className="flex items-center space-x-2">

          <input
            type="checkbox"
            id="privacy"
            className="rounded"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label
            htmlFor="privacy"
            onClick={toggleModal} // Opens the modal on click
          >
            You agree to our friendly policy, <span className="hover:text-primary font-bold cursor-pointer">read privacy policy.</span>
          </label>
          </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-md hover:bg-black"
            disabled={!isChecked} // Disable button when checkbox is unchecked
          >
            
            {loading ? "Sending message..." : "Send message"}
          </button>
          {/* {!isChecked && (
            <p className="text-red-500 text-sm mt-2 text-center">You must agree to the privacy policy before proceeding.</p>
          )} */}
      </form>
          

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white lg:w-1/2 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Privacy Policy</h2>
            <p className="mt-4">
              Here is the detailed privacy policy content. (You can replace this with your actual policy text.)
            </p>
            <button
              className="mt-4 bg-primary text-white p-2 rounded-md hover:bg-black"
              onClick={toggleModal} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>



  );
}




