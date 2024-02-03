import { useRef, useState } from "react";
import { supabaseUrl } from "../services/supabase";

export default function ImageUpload({ images, setImages }) {
  // const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onSelectFile(event) {
    const files = event.target.files;
    // const files = event.target.image;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i],
            imageName: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function onDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  return (
    <div className="card">
      {/* <div className="top">
        <p>Drag & Drop image</p>
      </div> */}
      <div
        className="h-20 rounded-md border border-indigo-200 text-indigo-900 bg-white flex justify-center items-center"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging ? (
          <span className="text-indigo-900 ml-1 transition-all duration-300 cursor-pointer hover:text-indigo-800">
            Drop image here
          </span>
        ) : (
          <>
            {/* Drag & Drop image here or{" "} */}
            <span
              className="text-indigo-900 ml-1 transition-all duration-300 cursor-pointer hover:text-indigo-800"
              role="button"
              onClick={selectFiles}
            >
              Click to upload image
            </span>
          </>
        )}
        <input
          name="files"
          type="file"
          id="files"
          className="hidden"
          accept="files/*"
          multiple
          ref={fileInputRef}
          onChange={onSelectFile}
        />
      </div>
      <div className="w-full h-auto flex justify-start items-start flex-wrap max-h-52 mt-2">
        {images.map((image, i) => (
          <div className="w-[75px] h-[75px] mr-1 relative mb-2" key={i}>
            <span
              className="absolute -top-[2px] text-red-500 right-[9px] text-lg cursor-pointer"
              onClick={() => deleteImage(i)}
            >
              &times;
            </span>
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>
      {/* <button type="button">Upload</button> */}
    </div>
  );
}

// import { useState } from "react";
// import ImageUploading from "react-images-uploading";

// function ImageUpload({ images, setImages }) {
//   // const [images, setImages] = useState([]);
//   const maxNumber = 69;

//   const onChange = (imageList, addUpdateIndex, e) => {
//     // e.preventDefault();
//     // data for submit
//     // console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };
//   return (
//     <div className="mb-3">
//       <ImageUploading
//         multiple
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//       >
//         {({
//           imageList,
//           onImageUpload,
//           onImageRemoveAll,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps,
//         }) => (
//           // write your building UI
//           <div className="upload__image-wrapper border border-indigo-200 px-4 py-2">
//             <div className="flex items-center gap-4">
//               <button
//                 type="button"
//                 style={isDragging ? { color: "red" } : undefined}
//                 onClick={onImageUpload}
//                 {...dragProps}
//               >
//                 Click or Drop here
//               </button>
//               &nbsp;
//               <button
//                 className="text-red-500"
//                 type="button"
//                 onClick={onImageRemoveAll}
//               >
//                 Remove all images
//               </button>
//             </div>
//             <div className="flex items-center gap-2 mt-3">
//               {imageList.map((image, index) => (
//                 <div key={index} className="image-item relative">
//                   <button
//                     className="absolute -top-[2px] right-[9px] text-red-500 text-xl cursor-pointer"
//                     type="button"
//                     onClick={() => onImageRemove(index)}
//                   >
//                     &times;
//                   </button>
//                   <img
//                     src={image["data_url"]}
//                     alt=""
//                     // width="100"
//                     className="h-[75px] w-[75px]"
//                   />

//                   <div className="image-item__btn-wrapper">
//                     {/* <button type="button" onClick={() => onImageUpdate(index)}>
//                     Update
//                   </button> */}

//                     {/* <button
//                     className="absolute -top-[2px] text-red-500 right-[9px] text-lg cursor-pointer"
//                     type="button"
//                     onClick={() => onImageRemove(index)}
//                   >
//                     Remove
//                   </button> */}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </ImageUploading>
//     </div>
//   );
// }

// export default ImageUpload;
