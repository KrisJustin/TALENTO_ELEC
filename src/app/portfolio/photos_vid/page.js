import { Typography } from "@mui/material";

export default function PhotosVideos() {
  return (
    <div className="space-y-8">
     
      <div>
        <Typography variant="h6" gutterBottom>
          Photo
        </Typography>
        <div className="flex justify-center">
          <img
            src="photo.jpg"
            className="w-full max-w-lg h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
