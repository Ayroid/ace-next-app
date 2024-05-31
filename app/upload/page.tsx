"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {publicId && (
        <div>
          <CldImage
            src={publicId}
            width="300"
            height="300"
            crop="fill"
            alt="Dummy Image"
          />
        </div>
      )}

      <CldUploadWidget
        uploadPreset="lhgczadi"
        onSuccess={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
          setLoading(false);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <button onClick={() => open()} className="btn btn-primary">
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
