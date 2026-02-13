import { useSettings, useFiles } from '@mywallpaper/sdk-react'
import { useState, useEffect } from 'react'

interface Settings {
  wallpaperImage: unknown
}

export default function WallpaperBackground() {
  const settings = useSettings<Settings>()
  const { request: requestFile, isFileReference } = useFiles()
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    if (isFileReference(settings.wallpaperImage)) {
      requestFile('wallpaperImage').then((url) => {
        if (url) setImageUrl(url)
      })
    }
  }, [settings.wallpaperImage, requestFile, isFileReference])

  if (!imageUrl) return null

  return (
    <img
      src={imageUrl}
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
