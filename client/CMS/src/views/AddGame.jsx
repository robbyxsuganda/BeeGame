import { Link } from "react-router";

export default function AddGame() {
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* Logo and Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Add New Game</h2>
          </div>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            {/* Add Game Form */}
            <form className="space-y-6" action="#" method="POST" encType="multipart/form-data">
              {/* Game Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  {" "}
                  Title{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter game title"
                  />
                </div>
              </div>
              {/* Developer */}
              <div>
                <label htmlFor="developer" className="block text-sm font-medium text-gray-700">
                  Developer{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="developer"
                    name="developer"
                    type="text"
                    required=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter game developer"
                  />
                </div>
              </div>
              {/* Category */}
              <div>
                <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
                  {" "}
                  Category{" "}
                </label>
                <div className="mt-1">
                  <select
                    id="categoryId"
                    name="categoryId"
                    required=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a category</option>
                    <option value={1}>PC Game</option>
                    <option value={2}>Mobile Game</option>
                  </select>
                </div>
              </div>
              {/* Game Image */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  {" "}
                  Image Url{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="image"
                    name="image"
                    type="text"
                    required=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter game image url"
                  />
                </div>
              </div>
              {/* Submit Buttons */}
              <div className="flex space-x-4">
                <Link
                  to={"/"}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Game
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
