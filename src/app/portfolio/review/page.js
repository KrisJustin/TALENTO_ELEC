import { Typography } from "@mui/material";

export default function Reviews() {
  return (
    <div className="space-y-6">
      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-start space-x-4">
          
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
            K
          </div>
          <div>
            
            <Typography variant="h6">Karl M.</Typography>
            <Typography variant="body2" color="textSecondary">
              June 27, 2024
            </Typography>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>
            
            <Typography variant="body1" className="mt-2">
              I had the pleasure of attending an event where Ian Jeffprox Casul
              performed, and he was absolutely amazing! His soulful voice
              captivated the audience from the very first song, and his engaging
              stage presence kept everyone entertained throughout the night.
              Ian's versatility really stood out as he flawlessly transitioned
              from energetic pop hits to heartfelt ballads, and even some smooth
              jazz tunes that added a touch of elegance to the evening.
            </Typography>
            
            <div className="flex items-center mt-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Reply..."
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <button className="ml-2">
                <span className="material-icons text-gray-500">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
            J
          </div>
          <div>        
            <Typography variant="h6">Joshua K.</Typography>
            <Typography variant="body2" color="textSecondary">
              June 10, 2024
            </Typography>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>
            <Typography variant="body1" className="mt-2">
              Ian kicked off the evening with some lively pop tunes that got
              everyone on their feet and dancing. He then transitioned
              seamlessly into a series of acoustic songs that brought a
              beautiful, intimate feel to the event. His ballads were especially
              powerful, and you could see how deeply the audience was moved by
              his heartfelt delivery.
            </Typography>
            <div className="flex items-center mt-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Reply..."
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <button className="ml-2">
                <span className="material-icons text-gray-500">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
