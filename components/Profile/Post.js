import { useState } from "react";
import Image from "next/image";

import Avatar from "../../public/avatar.svg";
import PicturePostSatu from "../../public/picture1-from-unsplash.jpg";
import PicturePostDua from "../../public/picture2-from-unsplash.jpg";

const postArr = [
  {
    id: 0,
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
    isLike: false,
  },
  {
    id: 1,
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
    isLike: false,
  },
  {
    id: 2,
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
    isLike: false,
  },
  {
    id: 3,
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
    isLike: false,
  },
];

const Post = () => {
  const [posts] = useState(postArr);
  const [isLike, setIsLike] = useState({});
  const [isComment, setIsComment] = useState({});
  const [text] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere sequi ipsam cum odit quos mollitia enim blanditiis labore veniam excepturi itaque necessitatibus illum consequuntur voluptas laborum maxime aut, ab dolorum sunt. Eum corporis expedita nihil, perspiciatis quibusdam veniam eaque cum adipisci aut? Magni non facere ullam nisi cumque eaque quos totam cum consectetur rem iusto in doloremque sapiente, veritatis commodi natus voluptatibus voluptatum aliquam neque repellat. Soluta ipsam minima maxime commodi quae, earum error aperiam excepturi, distinctio tempore sequi repellendus sed dolorem, blanditiis inventore exercitationem harum! Necessitatibus explicabo sit, assumenda molestiae optio quam fugiat corrupti, minima rem minus placeat!"
  );
  const [seeMoreBtn, setSeeMoreBtn] = useState(false);

  const seeMoreHandler = () => {
    setSeeMoreBtn(!seeMoreBtn);
  };

  const likeButtonHandler = (itemId) => {
    setIsLike((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const commentButtonHandler = (itemId) => {
    setIsComment((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
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
                <div className="flex justify-around mb-5">
                  <div
                    onClick={likeButtonHandler.bind(null, post.id)}
                    className={`text-slate-900 flex gap-2 items-center cursor-pointer hover:bg-gray-100 hover:rounded-xl hover:text-slate-500 transition duration-200 ${
                      isLike[post.id]
                        ? "hover:bg-transparent hover:text-slate-900"
                        : ""
                    } text-center justify-center w-full`}
                  >
                    <span
                      className={`text-3xl pt-2 ${
                        isLike[post.id] ? "text-red-500" : ""
                      }`}
                    >
                      {isLike[post.id] && <ion-icon name="heart"></ion-icon>}
                      {!isLike[post.id] && (
                        <ion-icon name="heart-outline"></ion-icon>
                      )}
                    </span>
                    <button>Like</button>
                  </div>
                  <div
                    onClick={commentButtonHandler.bind(null, post.id)}
                    className="text-slate-900 flex gap-2 items-center cursor-pointer  hover:bg-gray-100 hover:rounded-xl hover:text-slate-500 transition duration-200 text-center justify-center w-full"
                  >
                    <span className="text-3xl pt-2">
                      <ion-icon name="chatbox-outline"></ion-icon>
                    </span>
                    <button>Comment</button>
                  </div>
                  <div className="text-slate-900 flex gap-2 items-center cursor-pointer  hover:bg-gray-100 hover:rounded-xl hover:text-slate-500 transition duration-200 text-center justify-center w-full">
                    <span className="text-3xl pt-2">
                      <ion-icon name="share-social-outline"></ion-icon>
                    </span>
                    <button>Share</button>
                  </div>
                  <div className="text-slate-900 flex gap-2 items-center cursor-pointer hover:bg-gray-100 hover:rounded-xl hover:text-slate-500 transition duration-200 text-center justify-center w-full">
                    <span className="text-3xl pt-2">
                      <ion-icon name="bookmark-outline"></ion-icon>
                    </span>
                    <button>Save</button>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-[height] duration-300 ease ${
                    isComment[post.id] ? "h-[42rem]" : "h-0"
                  } `}
                >
                  <div className="bg-gray-200 flex justify-between gap-2 items-center rounded-full px-3">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      id="comment"
                      className="p-2 w-full bg-transparent focus:outline-none"
                    />
                    <span className="text-4xl -rotate-45 text-slate-600">
                      <ion-icon name="attach-outline"></ion-icon>
                    </span>
                    <div>
                      <button className="text-white text-sm bg-emerald-600 rounded px-6 py-1 hover:bg-emerald-500 transition duration-200">
                        Post
                      </button>
                    </div>
                  </div>
                  <div className="cursor-pointer  flex gap-2 items-center justify-center text-slate-400 font-medium my-4">
                    <p>Most Relevan</p>
                    <span className="pt-2">
                      <ion-icon name="chevron-down-outline"></ion-icon>
                    </span>
                  </div>
                  <ul>
                    <li className="flex gap-2 mb-3">
                      <div className="w-14">
                        <Image src={Avatar} alt="avatar-user-comment" />
                      </div>
                      <div className="w-full">
                        <div className="bg-gray-200 p-2 rounded-lg">
                          <div className="flex justify-between">
                            <div className="mb-2">
                              <h5 className="font-semibold text-slate-800">
                                Example Comment 1
                              </h5>
                              <p className="text-xs text-slate-500">
                                UI/UX Designer at Google.com
                              </p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <p className="text-xs">2d</p>
                              <span className="text-2xl text-slate-500  pt-2">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-slate-900">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi deserunt quae doloremque temporibus
                          </p>
                        </div>
                        <div className="flex gap-2 text-xs text-slate-950 mt-2">
                          <p>Like</p>
                          <p>|</p>
                          <p>Reply</p>
                          <p>1 Reply</p>
                        </div>
                        <ul className="mt-3">
                          <li className="flex gap-2">
                            <div className="w-12">
                              <Image src={Avatar} alt="avatar-user-comment" />
                            </div>
                            <div className="w-full">
                              <div className="bg-gray-200 p-2 rounded-lg">
                                <div className="flex justify-between">
                                  <div className="mb-2">
                                    <h5 className="font-semibold text-slate-800">
                                      Example Reply 1
                                    </h5>
                                    <p className="text-xs text-slate-500">
                                      Project Manager at Google.com
                                    </p>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                    <p className="text-xs">2d</p>
                                    <span className="text-2xl text-slate-500  pt-2">
                                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                                    </span>
                                  </div>
                                </div>
                                <p className="text-sm text-slate-900">
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Illum beatae voluptate vero
                                  doloribus dolore aut, ex ipsam, delectus
                                  perspiciatis voluptatem mollitia architecto in
                                  debitis animi.
                                </p>
                              </div>
                              <div className="flex gap-2 text-xs text-slate-950 mt-2">
                                <p>Like</p>
                                <p>|</p>
                                <p>Reply</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="flex gap-2">
                      <div className="w-14">
                        <Image src={Avatar} alt="avatar-user-comment" />
                      </div>
                      <div className="w-full">
                        <div className="bg-gray-200 p-2 rounded-lg">
                          <div className="flex justify-between">
                            <div className="mb-2">
                              <h5 className="font-semibold text-slate-800">
                                Example Comment 2
                              </h5>
                              <p className="text-xs text-slate-500">
                                Senior Enginer at Google.com
                              </p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <p className="text-xs">2d</p>
                              <span className="text-2xl text-slate-500  pt-2">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-slate-900">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi deserunt quae doloremque temporibus
                            adipisci minima ullam repellat ad quisquam
                            consequatur fuga, aut blanditiis optio provident
                            neque dolores amet obcaecati distinctio velit. Illo
                            perspiciatis, molestias eligendi itaque quasi
                            delectus reiciendis, dolore, accusamus a vel facilis
                            quia nam recusandae laudantium porro sed!
                          </p>
                        </div>
                        <div className="flex gap-2 text-xs text-slate-950 mt-2">
                          <p>Like</p>
                          <p>|</p>
                          <p>Reply</p>
                          <p>1 Reply</p>
                        </div>
                        <ul className="mt-3">
                          <li className="flex gap-2">
                            <div className="w-12">
                              <Image src={Avatar} alt="avatar-user-comment" />
                            </div>
                            <div className="w-full">
                              <div className="bg-gray-200 p-2 rounded-lg">
                                <div className="flex justify-between">
                                  <div className="mb-2">
                                    <h5 className="font-semibold text-slate-800">
                                      Example Reply 2
                                    </h5>
                                    <p className="text-xs text-slate-500">
                                      Project Manager at Google.com
                                    </p>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                    <p className="text-xs">2d</p>
                                    <span className="text-2xl text-slate-500 pt-2">
                                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                                    </span>
                                  </div>
                                </div>
                                <p className="text-sm text-slate-900">
                                  Lorem ipsum dolor sit
                                </p>
                              </div>
                              <div className="flex gap-2 text-xs text-slate-950 mt-2">
                                <p>Like</p>
                                <p>|</p>
                                <p>Reply</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>

                  <div className="text-slate-800 text-sm font-medium flex justify-between mt-3">
                    <p>Load more comments{" >>"}</p>
                    <p>Add comment</p>
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
