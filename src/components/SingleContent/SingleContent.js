import React from 'react'
import { img_300, unavailable } from "../../components/config/config";
import "./SingleContent.css";
import {Badge} from "@material-ui/core";
import ContentModel from "../ContentModel/ContentModel";


const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  pages,
}) => {
  return (
    
    <ContentModel>
      <Badge badgeContent={vote_average} color={vote_average>6?"primary" : "secondary"} />
      <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className='title'>{ title}</b>
      <span className='subTitle'>
        {media_type=== 'tv' ? "TV Series" : "Movie"}
        <span className='subTitle'>{date}</span>
        <span className='subTitle'>{pages}</span>
      </span>
    </ContentModel>
    
  )
}

export default SingleContent