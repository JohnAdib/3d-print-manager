<template>
  <section class="bg-gray-50 py-10">
    <div class="container mx-auto px-4 md:px-12">
      <div class="bg-white shadow-md rounded-lg p-8 md:p-12">
        <h1 class="text-4xl font-bold text-emerald-800 mb-6">About 3D Printing Manager</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          The <strong>3D Printing Manager</strong> is a powerful and user-friendly solution for
          uploading and managing 3D printing part files, specifically designed for handling
          <strong>STL</strong> files. Built with cutting-edge technologies such as
          <strong>Laravel</strong> and <strong>Vue.js</strong>, this project offers a smooth user
          experience from file selection to 3D previews and file submission.
        </p>

        <h2 class="text-2xl font-semibold text-slate-900 mb-4">Core Features</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6">
          <li>
            <strong>File Selection:</strong> Easily select multiple <strong>STL</strong> files to
            upload and manage.
          </li>
          <li>
            <strong>3D File Preview:</strong> Each file is displayed in an interactive 3D viewer
            powered by <strong>Three.js</strong> to give users a detailed preview before submission.
          </li>
          <li>
            <strong>File Management:</strong> Users have the ability to delete files from the list
            if necessary, providing more control over their file submissions.
          </li>
          <li>
            <strong>File Submission:</strong> After reviewing the files, users can submit the
            selected files, and a success or error message is displayed accordingly.
          </li>
          <li>
            <strong>UI Reset:</strong> Once the files are successfully submitted, the user interface
            resets to allow new uploads.
          </li>
        </ul>

        <h2 class="text-2xl font-semibold text-slate-900 mb-4">UI Flow</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <div>
            <h3 class="text-xl font-semibold text-slate-800">1. File Selection</h3>
            <p>
              Users can select multiple <strong>STL</strong> files using the upload form. A list of
              the selected files is displayed, including file names and a file validation step to
              ensure the correct format is uploaded.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-slate-800">2. File Preview</h3>
            <p>
              Each <strong>STL</strong> file is rendered in a real-time 3D viewer using
              <strong>Three.js</strong>, allowing users to rotate and zoom into their models for
              better visualization.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-slate-800">3. File Management</h3>
            <p>
              If necessary, users can delete files from the selection list, providing them with the
              flexibility to modify their selections before submitting the files to the backend.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-slate-800">4. File Submission</h3>
            <p>
              Once the user is satisfied with the files, they can submit the form, which will send
              the files to the backend (Laravel). Feedback in the form of success or error messages
              is displayed after submission.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-slate-800">5. UI Reset</h3>
            <p>
              After successful submission, the user interface resets, making the tool ready for a
              new batch of file uploads.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
