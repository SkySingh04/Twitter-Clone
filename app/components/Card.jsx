import { GoDotFill } from "react-icons/go";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { RxLoop } from "react-icons/rx";

const Card = ({ user, tweet }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 mt-4 flex gap-4">
      <div>
        <img
          className="h-12 w-12 rounded-full"
          src={user.profileImage}
          alt="Profile Image"
        />
      </div>
      <div>
        <div className="flex gap-1">
          <p className="font-bold">{user.name}</p>
          <p className="text-gray-500">{"@" + user.username}</p>
          <div className="mt-2">
            <GoDotFill color="#fafafa44" size={10} />
          </div>
          <p className="text-gray-300">
            {tweet.timestamp.toDate().toDateString()}
          </p>
        </div>
        <p className="text-white">{tweet.content}</p>
        <div className="flex tweet.info">
          <div className="flex gap-2">
            <FaRegComment size={14}/>
            {tweet.comment??'10'}
          </div>
          <div className="flex gap-2">
            <RxLoop size={14}/>
            {tweet.repost??'1'}
          </div>
          <div className="flex gap-2">
            <FaRegHeart size={14}/>
            {tweet.like??'46'}
          </div>
          <div className="flex gap-2">
            <FiBarChart2 size={14}/>
            {tweet.view??'100'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
