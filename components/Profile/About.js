import { useState } from "react";

const About = () => {
  const [text] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi aliquam asperiores accusantium officiis dignissimos blanditiis obcaecatidolorem, voluptatem et velit nesciunt ut, ex deleniti laborum distinctio maxime commodi vitae suscipit deserunt eos expedita! Nihil, voluptatibus cumque? Porro animi nemo numquam beatae maiores autem nihil, eligendi, iure perferendis aliquid in. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dignissimos molestias id, esse molestiae eveniet, facere quam suscipit dicta officiis voluptatibus rem labore vel recusandae sint iure amet ducimus. Qui dignissimos iste impedit quia facere corporis consequatur veniam! Voluptatem fugiat ipsum cupiditate quaerat et labore similique nam obcaecati nulla ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro eum incidunt reprehenderit ducimus, facere labore, in expedita omnis pariatur distinctio consequuntur cumque corrupti perferendis voluptates aut alias maxime obcaecati est dolor debitis optio nihil assumenda molestiae? Ullam repellendus deserunt tenetur asperiores a. Eaque omnis maiores aliquid, culpa repellat laudantium."
  );
  const [seeMoreBtn, setSeeMoreBtn] = useState(false);

  const seeMoreHandler = () => {
    setSeeMoreBtn(!seeMoreBtn);
  };
  return (
    <div className="bg-white rounded p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold mb-2">About</h1>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <p className={`overflow-hidden ${seeMoreBtn ? "block" : "line-clamp-5"}`}>
        {text}
      </p>
      {text.length > 100 && (
        <button onClick={seeMoreHandler}>...see more</button>
      )}
    </div>
  );
};

export default About;
