import { useCallback, useState } from "react";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";

export default function LightBox() {
  const [items] = useState([
    {
      id: "1",
      src: "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-01.jpg",
      thumb:
        "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-01.jpg",
    },
    {
      id: "2",
      src: "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-02.jpg",
      thumb:
        "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-02.jpg",
    },
    {
      id: "3",
      src: "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-02.jpg",
      thumb:
        "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-03.jpg",
    },
    {
      id: "4",
      src: "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-04.jpg",
      thumb:
        "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-04.jpg",
    },
  ]);

  const getItems = useCallback(() => {
    return items.map((item) => {
      return (
        <a
          key={item.id}
          data-lg-size={item.size}
          className="gallery-item"
          data-src={item.src}
        >
          <img
            className="rounded-md"
            src={item.thumb}
            alt="image"
            width={400}
            height={400}
          />
        </a>
      );
    });
  }, [items]);

  const lgOptions = {
    // Add your LightGallery options here
    // For example:
    zoomable: true,
  };

  return (
    <div>
      <LightGallery
        plugins={[lgZoom]}
        elementClassNames="flex gap-2 w-52"
        options={lgOptions}
        addclassName="opacity-1"
      >
        {getItems()}
      </LightGallery>
    </div>
  );
}
