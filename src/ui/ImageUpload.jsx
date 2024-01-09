import { useRef, useState } from "react";

export default function ImageUpload() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onSelectFile(event) {
    const files = event.target.files;
    if (files.length === 0) return;
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
            Drag & Drop image here or{" "}
            <span
              className="text-indigo-900 ml-1 transition-all duration-300 cursor-pointer hover:text-indigo-800"
              role="button"
              onClick={selectFiles}
            >
              Browse
            </span>
          </>
        )}
        <input
          name="files"
          type="file"
          className="hidden"
          multiple
          ref={fileInputRef}
          onChange={onSelectFile}
        />
      </div>
      <div className="w-full h-auto flex justify-start items-start flex-wrap max-h-52 mt-2">
        {images.map((image, i) => (
          <div className="w-[75px] h-[75px] mr-1 relative mb-2" key={i}>
            <span
              className="absolute -top-[2px] right-[9px] text-lg cursor-pointer"
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
