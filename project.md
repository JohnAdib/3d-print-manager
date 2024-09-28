# 3D Printing Manager

This project is a solution for uploading 3D printing part files (specifically **STL** files) with file preview. The project was built using **Laravel and Vue.js**.

## Features

### Main Task

The core functionality is to allow users to upload **3D printing part files** (STL format) via an upload form, with a **3D preview** of the uploaded files. The flow and extra features are as follows:

### UI Flow

1. **File Selection**:

   - Users can select **multiple STL files** using the upload form.
   - A **list** of selected files is displayed with their file names.
   - Files are validated to ensure they are in the correct **STL format**.

2. **File Preview**:

   - Each STL file is rendered in a **3D viewer** (using **Three.js**), allowing the user to preview the file.
   - The user can inspect multiple files before submitting them to the backend.

3. **Delete Individual File (Extra Features)**:

   - Users can delete specific files from the list if they change their mind or accidentally upload the wrong file. This gives more control over the submission.

4. **Submit Files**:

   - Users can submit the form once they are satisfied with the file selection.
   - The form sends the files to the backend (Laravel).
   - A **success message** or **error message** is displayed based on the result of the submission.

5. **UI Reset**:
   - After successful submission, the UI resets to allow the user to upload new files if needed.
