import React, { useState, useEffect } from "react";
import profiles from "../data/profiles.json";

const FeaturedProfiles = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setOpenModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClick = (profile) => {
    setSelectedProfile(profile);
    setOpenModal(true);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center mt-8 mb-6">
        <h1 className="font-bold text-3xl md:text-4xl">Featured Profiles</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12 pb-12">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            onClick={() => handleClick(profile)}
            role="button"
            tabIndex={0}
            className="border-2 border-orange-300 bg-white transition-shadow cursor-pointer rounded-xl overflow-hidden hover:shadow-md"
          >
            <div className="p-4 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-amber-100 border-2 border-orange-300 overflow-hidden">
                <img
                  src={profile.avatar || "https://via.placeholder.com/150"}
                  alt={profile.name || "Profile"}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold mt-2">{profile.name}</h2>
              <p className="font-bold">{profile.age}</p>
            </div>

            <div className="bg-orange-200 w-full h-5 shadow-sm" />

            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2 px-4 pt-4">
                Hobbies
              </h3>
              {profile.hobbies?.[0] && (
                <div className="px-4 pb-4">
                  <p>
                    <span className="font-bold">
                      {profile.hobbies[0].title || profile.hobbies[0].name}:{" "}
                    </span>
                    {profile.hobbies[0].description}
                  </p>
                </div>
              )}

              {profile.hobbies?.[1] && (
                <>
                  <div className="border-t border-orange-300 w-full" />
                  <div className="px-4 py-4">
                    <p>
                      <span className="font-bold">
                        {profile.hobbies[1].title || profile.hobbies[1].name}:{" "}
                      </span>
                      {profile.hobbies[1].description}
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="bg-orange-200 w-full h-5 shadow-sm" />

            <div className="mt-2 mb-4 p-4 text-center">
              <p className="font-medium">{profile.location}</p>
              <p className="text-gray-700 pt-2">{profile.tagline}</p>
              <p className="text-sm text-gray-600 mt-2">
                {profile.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {openModal && selectedProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setOpenModal(false)}
          ></div>

          <div className="relative w-full max-w-2xl mx-auto my-6 bg-white rounded-lg shadow-xl z-10">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                {selectedProfile.name}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => setOpenModal(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-amber-300 overflow-hidden mx-auto">
                    <img
                      src={
                        selectedProfile.avatar ||
                        "https://via.placeholder.com/150"
                      }
                      alt={selectedProfile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <h2 className="text-xl font-bold">
                    {selectedProfile.name}, {selectedProfile.age}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {selectedProfile.location}
                  </p>

                  <p className="text-gray-600 mb-4">
                    {selectedProfile.tagline}
                  </p>

                  <h3 className="font-semibold text-lg">About</h3>
                  <p className="mb-4">{selectedProfile.description}</p>

                  <h3 className="font-semibold text-lg mb-2">Hobbies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProfile.hobbies?.length > 0 ? (
                      selectedProfile.hobbies.map((hobby, index) => (
                        <div key={index}>
                          <p className="font-medium">
                            {hobby.title || hobby.name}
                          </p>
                          <p className="text-gray-600">{hobby.description}</p>
                        </div>
                      ))
                    ) : (
                      <p>No hobbies listed.</p>
                    )}
                  </div>

                  <h3 className="font-semibold text-lg mt-4 mb-2">Contact</h3>
                  <p>{"No contact information available."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProfiles;
