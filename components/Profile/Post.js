import { useState } from "react";
import Image from "next/image";

import Avatar from "../../public/avatar.svg";
import PicturePostSatu from "../../public/picture1-from-unsplash.jpg";
import PicturePostDua from "../../public/picture2-from-unsplash.jpg";

const postArr = [
  {
    id: 1,
    creator: "Dena Sudarajat",
    profesi: "Junior Web Developer",
    tanggalDibuat: "2 Hours ago",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere sequi ipsam cum odit quos mollitia enim blanditiis labore veniam excepturi itaque necessitatibus illum consequuntur voluptas laborum maxime aut, ab dolorum sunt. Eum corporis expedita nihil, perspiciatis quibusdam veniam eaque cum adipisci aut? Magni non facere ullam nisi cumque eaque quos totam cum consectetur rem iusto in doloremque sapiente, veritatis commodi natus voluptatibus voluptatum aliquam neque repellat. Soluta ipsam minima maxime commodi quae, earum error aperiam excepturi, distinctio tempore sequi repellendus sed dolorem, blanditiis inventore exercitationem harum! Necessitatibus explicabo sit, assumenda molestiae optio quam fugiat corrupti, minima rem minus placeat!",
    gambar: Avatar,
    picturePost: PicturePostSatu,
    like: "Users and 50 others likes this",
    panjangKomen: 40,
    totalShare: 24,
  },
  {
    id: 2,
    creator: "Dena Sudarajat",
    profesi: "Junior Web Developer",
    tanggalDibuat: "2 Hours ago",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere sequi ipsam cum odit quos mollitia enim blanditiis labore veniam excepturi itaque necessitatibus illum consequuntur voluptas laborum maxime aut, ab dolorum sunt. Eum corporis expedita nihil, perspiciatis quibusdam veniam eaque cum adipisci aut? Magni non facere ullam nisi cumque eaque quos totam cum consectetur rem iusto in doloremque sapiente, veritatis commodi natus voluptatibus voluptatum aliquam neque repellat. Soluta ipsam minima maxime commodi quae, earum error aperiam excepturi, distinctio tempore sequi repellendus sed dolorem, blanditiis inventore exercitationem harum! Necessitatibus explicabo sit, assumenda molestiae optio quam fugiat corrupti, minima rem minus placeat!",
    gambar: Avatar,
    picturePost: null,
    like: "Users and 50 others likes this",
    panjangKomen: 40,
    totalShare: 24,
  },
  {
    id: 3,
    creator: "Dena Sudarajat",
    profesi: "Junior Web Developer",
    tanggalDibuat: "2 Hours ago",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere sequi ipsam cum odit quos mollitia enim blanditiis labore veniam excepturi itaque necessitatibus illum consequuntur voluptas laborum maxime aut, ab dolorum sunt. Eum corporis expedita nihil, perspiciatis quibusdam veniam eaque cum adipisci aut? Magni non facere ullam nisi cumque eaque quos totam cum consectetur rem iusto in doloremque sapiente, veritatis commodi natus voluptatibus voluptatum aliquam neque repellat. Soluta ipsam minima maxime commodi quae, earum error aperiam excepturi, distinctio tempore sequi repellendus sed dolorem, blanditiis inventore exercitationem harum! Necessitatibus explicabo sit, assumenda molestiae optio quam fugiat corrupti, minima rem minus placeat!",
    gambar: Avatar,
    picturePost: PicturePostDua,
    like: "Users and 50 others likes this",
    panjangKomen: 40,
    totalShare: 24,
  },
  {
    id: 4,
    creator: "Dena Sudarajat",
    profesi: "Junior Web Developer",
    tanggalDibuat: "2 Hours ago",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere sequi ipsam cum odit quos mollitia enim blanditiis labore veniam excepturi itaque necessitatibus illum consequuntur voluptas laborum maxime aut, ab dolorum sunt. Eum corporis expedita nihil, perspiciatis quibusdam veniam eaque cum adipisci aut? Magni non facere ullam nisi cumque eaque quos totam cum consectetur rem iusto in doloremque sapiente, veritatis commodi natus voluptatibus voluptatum aliquam neque repellat. Soluta ipsam minima maxime commodi quae, earum error aperiam excepturi, distinctio tempore sequi repellendus sed dolorem, blanditiis inventore exercitationem harum! Necessitatibus explicabo sit, assumenda molestiae optio quam fugiat corrupti, minima rem minus placeat!",
    gambar: Avatar,
    picturePost: null,
    like: "Users and 50 others likes this",
    panjangKomen: 40,
    totalShare: 24,
  },
];

const Post = () => {
  const [posts] = useState(postArr);
  const [text] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere sequi ipsam cum odit quos mollitia enim blanditiis labore veniam excepturi itaque necessitatibus illum consequuntur voluptas laborum maxime aut, ab dolorum sunt. Eum corporis expedita nihil, perspiciatis quibusdam veniam eaque cum adipisci aut? Magni non facere ullam nisi cumque eaque quos totam cum consectetur rem iusto in doloremque sapiente, veritatis commodi natus voluptatibus voluptatum aliquam neque repellat. Soluta ipsam minima maxime commodi quae, earum error aperiam excepturi, distinctio tempore sequi repellendus sed dolorem, blanditiis inventore exercitationem harum! Necessitatibus explicabo sit, assumenda molestiae optio quam fugiat corrupti, minima rem minus placeat!"
  );
  const [seeMoreBtn, setSeeMoreBtn] = useState(false);

  const seeMoreHandler = () => {
    setSeeMoreBtn(!seeMoreBtn);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-3">
          Post <span className="font-normal">(30)</span>
        </h2>
        <button className="text-3xl">
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>
      <div className="bg-gray-200 rounded-xl h-[50rem] flex gap-3">
        <div className="pl-3">
          <div className="p-2 rounded-full bg-white flex items-center mt-3">
            <ion-icon name="search-outline"></ion-icon>
            <input
              type="search"
              placeholder="Keywords..."
              className="p-1 focus:outline-none"
            />
          </div>
          <button className="px-2 py-1 border border-slate-950 rounded mt-3  hover:bg-emerald-500 hover:border-transparent transition duration-200">
            All
          </button>
          <button className="px-2 py-1 border border-slate-950 rounded mt-3 block  hover:bg-emerald-500 hover:border-transparent transition duration-200">
            Images
          </button>
          <button className="px-2 py-1 border border-slate-950 rounded mt-3 block  hover:bg-emerald-500 hover:border-transparent transition duration-200">
            Videos
          </button>
          <button className="px-2 py-1 border border-slate-950 rounded mt-3 block  hover:bg-emerald-500 hover:border-transparent transition duration-200">
            Articles
          </button>
          <button className="px-2 py-1 border border-slate-950 rounded mt-3 block  hover:bg-emerald-500 hover:border-transparent transition duration-200">
            Documents
          </button>
          <button className="px-2 py-1 border border-slate-950 rounded mt-3 block  hover:bg-emerald-500 hover:border-transparent transition duration-200">
            Ads
          </button>
          <div className="mt-3 font-semibold">
            <p>Sort By:</p>
            <div className="block mt-2">
              <input type="radio" id="Newest" className="mr-2" />
              <label htmlFor="Newest">Newest</label>
            </div>
            <div className="block mt-2">
              <input type="radio" id="Popular" className="mr-2" />
              <label htmlFor="Popular">Popular</label>
            </div>
            <div className="block mt-2">
              <input type="radio" id="Seen" className="mr-2" />
              <label htmlFor="Seen">Seen by You</label>
            </div>
          </div>
          <div className="mt-64 flex flex-col items-center">
            <span className="text-5xl text-slate-700">
              <ion-icon name="arrow-up-circle"></ion-icon>
            </span>
            <button className="text-slate-800 font-medium">Scroll Up</button>
          </div>
        </div>
        <div className="mt-8 w-full mr-4 overflow-y-auto no-scrollbar h-[95%] overflow-hidden">
          <ul>
            {posts.map((post) => (
              <li
                key={post.id}
                className=" rounded p-4 h-fit bg-white shadow-lg shadow-gray-500/50 mb-5"
              >
                <div className="flex justify-between">
                  <div className="flex gap-2 mb-5">
                    <div className="w-14">
                      <Image src={post.gambar} alt="profile picture" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800">
                        {post.creator}
                      </h5>
                      <p className="text-sm text-slate-500">{post.profesi}</p>
                      <p className="text-xs text-slate-600">
                        {post.tanggalDibuat}
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl text-slate-500">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                  </div>
                </div>
                <div className="mb-5">
                  <p className={`${seeMoreBtn ? "inline" : "line-clamp-2"}`}>
                    {post.deskripsi}
                  </p>
                  {post.deskripsi.length > 100 && (
                    <button
                      onClick={seeMoreHandler}
                      className="font-semibold text-slate-900"
                    >
                      ...see more
                    </button>
                  )}
                </div>
                {post.picturePost && (
                  <div className="h-96 flex items-center justify-center overflow-hidden">
                    <Image src={post.picturePost} alt="picture list satu" />
                  </div>
                )}
                <div className="text-sm text-slate-500 flex justify-between my-2">
                  <div>
                    <p className="hover:text-emerald-500 transition duration-200">
                      {post.like}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="hover:text-emerald-500 transition duration-200">
                      {post.panjangKomen} Comments
                    </p>
                    <span> | </span>
                    <p className="hover:text-emerald-500 transition duration-200">
                      {post.totalShare} shares
                    </p>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-slate-400 mb-3">
                  <span></span>
                </div>
                <div className="flex justify-around">
                  <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 hover:rounded-xl hover:text-slate-500 transition duration-200 text-center justify-center w-full">
                    <span className="text-3xl pt-2">
                      <ion-icon name="heart-outline"></ion-icon>
                    </span>
                    <button>Like</button>
                  </div>
                  <div className="flex gap-2 items-center cursor-pointer  hover:bg-gray-100 hover:rounded-xl hover:text-slate-500 transition duration-200 text-center justify-center w-full">
                    <span className="text-3xl pt-2">
                      <ion-icon name="chatbox-outline"></ion-icon>
                    </span>
                    <button>Comment</button>
                  </div>
                  <div className="flex gap-2 items-center cursor-pointer  hover:bg-gray-100 hover:rounded-xl hover:text-slate-500 transition duration-200 text-center justify-center w-full">
                    <span className="text-3xl pt-2">
                      <ion-icon name="share-social-outline"></ion-icon>
                    </span>
                    <button>Share</button>
                  </div>
                  <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 hover:rounded-xl hover:text-slate-500 transition duration-200 text-center justify-center w-full">
                    <span className="text-3xl pt-2">
                      <ion-icon name="bookmark-outline"></ion-icon>
                    </span>
                    <button>Save</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
