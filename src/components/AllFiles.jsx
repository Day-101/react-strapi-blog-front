import React, { useEffect, useState } from 'react';
import FilesAPI from '../services/filesAPI';
import CardFile from '../components/Card/CardFile';
import PostsContentLoader from '../components/Loaders/PostsContentLoader'

const AllFiles = () => {
  
    const [isLoading, setIsLoading] = useState(true)
    const [files, setFiles] = useState(null)
  
    useEffect(() => {
      fetchAllFiles();
    },[]);
  
    const fetchAllFiles = async () => {
      const files = await FilesAPI.findAll();
      setFiles(files);
      setIsLoading(false);
    };

  return (
    <div className="all-images-container">
      {isLoading ?
        (
          <PostsContentLoader />
        )
        :
          files.slice(0).reverse().map(
            file =>
            <CardFile file={file} key={file.id} />
          )}
    </div>
  );
};

export default AllFiles;
