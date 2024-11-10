import React, { useState } from 'react'
import imageCompression from 'browser-image-compression'
import './ImageConverter.css'

export default function ImageConverter() {
  const [originalImage, setOriginalImage] = useState(null)
  const [convertedImage, setConvertedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    if (file) {
      setIsLoading(true)
      setOriginalImage(URL.createObjectURL(file))

      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        }

        const compressedFile = await imageCompression(file, options)
        const webpBlob = await imageCompression.getFilefromDataUrl(await imageCompression.getDataUrlFromFile(compressedFile), 'image.webp')
        setConvertedImage(URL.createObjectURL(webpBlob))
      } catch (error) {
        console.error('Error converting image:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="container">
      <h1>Conversor de imagenes a Webp</h1>
      
      <div className="upload-container">
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageUpload}
          className="file-input"
        />
        <label htmlFor="imageUpload" className="file-label">
          Subi tu imagen
        </label>
      </div>

      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Convirtiendo imagen...</p>
        </div>
      )}

      <div className="image-container">
        {originalImage && (
          <div className="image-box">
            <h2>Imagen original</h2>
            <img src={originalImage} alt="Original" />
          </div>
        )}
        {convertedImage && (
          <div className="image-box">
            <h2>Imagen convertida</h2>
            <img src={convertedImage} alt="Converted" />
            <a
              href={convertedImage}
              download="converted_image.webp"
              className="download-button"
            >
              Descargar Webp
            </a>
          </div>
        )}
      </div>
    </div>
  )
}