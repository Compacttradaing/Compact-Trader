import { useState } from "react";
import ImageUploading from "react-images-uploading";

function ImageUpload() {
  const [images, setImages] = useState([]);
  const maxNumber = 10;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    //  console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {{}}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload;
