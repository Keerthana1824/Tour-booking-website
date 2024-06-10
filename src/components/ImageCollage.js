import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 300, height: 450 , marginLeft:1}}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://cdn.pixabay.com/photo/2019/12/18/04/11/dj-4702977_640.jpg',
    title: 'Music',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/11/22/18/56/audience-1850022_640.jpg',
    title: 'Dance',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2019/02/21/19/00/night-4011992_1280.jpg',
    title: 'Nightout',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_640.jpg',
    title: 'Food',
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/08/01/08/26/woman-2563474_640.jpg',
    title: 'Sight-seeing',
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2023/03/12/13/27/mountains-7846880_1280.jpg',
    title: 'Adventure',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2019/03/10/16/38/nature-4046557_1280.jpg',
    title: 'Views',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/07/24/05/25/pedestrians-400811_640.jpg',
    title: 'People',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_640.jpg',
    title: 'Concerts',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_640.jpg',
    title: 'Memories',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/06/24/01/15/coffee-819362_640.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2018/02/27/18/17/road-3186188_640.jpg',
    title: 'Journey',
    cols: 2,
  },
];
