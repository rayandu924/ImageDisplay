import { useSettings, useFiles } from '@mywallpaper/sdk-react'
import { useState, useEffect } from 'react'

interface Settings {
  wallpaperImage: unknown
  imageUrl: string
}

export default function ImageDisplay() {
  const settings = useSettings<Settings>()
  const { request: requestFile, isFileReference } = useFiles()
  const [fileBlobUrl, setFileBlobUrl] = useState<string | null>(null)

  useEffect(() => {
    if (isFileReference(settings.wallpaperImage)) {
      requestFile('wallpaperImage').then((url) => {
        if (url) setFileBlobUrl(url)
      })
    }
  }, [settings.wallpaperImage, requestFile, isFileReference])

  // Prefer uploaded file, fall back to URL
  const src = fileBlobUrl || settings.imageUrl || null

  if (!src) return null

  return (
    <img
      src={src}
      alt=""
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  )
}
