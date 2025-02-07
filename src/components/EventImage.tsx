import { useState } from 'react'
import './EventImage.css'

type EventImageProps = {
    src: string
    name: string
    time?: string
    place?: string
    desc?: string
}

function EventImage({ src, name, time, place, desc }: EventImageProps) {
    const [selected, setSelected] = useState(false)

    function clickOn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation()
        if (!selected) setSelected(true)
    }

    function clickOff(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation()
        if (selected) setSelected(false)
    }

    return (
        <div className={`event-image-wrap${selected ? ' selected' : ''}`} onClick={(e) => clickOff(e)}>
            <figure>
                <button onClick={(e) => clickOn(e)}>
                    <img className='event-image' src={src} aria-hidden={true} />
                </button>
                <figcaption>
                    <h3>{name}</h3>
                    {time && <em>{time}</em>}
                    {place && <em>{place}</em>}
                    {desc && <p>{desc}</p>}
                </figcaption>
            </figure>
        </div>
    )
}

export default EventImage
