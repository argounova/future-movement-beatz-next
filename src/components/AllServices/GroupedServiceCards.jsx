import {
    Container
} from "@mui/material"
import ServiceCard from "./ServiceCard"


const services = [
    {
        href: "/services/artwork",
        serviceImage: "https://future-movement-beatz.s3.amazonaws.com/featured-services-album-artwork.jpg",
        serviceTitle: "Custom Album Artwork",
    },
    {
        href: "/services/mixing",
        serviceImage: "https://future-movement-beatz.s3.amazonaws.com/featured-services-mixing.jpg",
        serviceTitle: "Mixing & Mastering",
    },
    {
        href: "/services/musicspace-playlists",
        serviceImage: "https://future-movement-beatz.s3.amazonaws.com/featured-services-playlist-submissions.jpg",
        serviceTitle: "MusicSpace Playlists",
    },
    {
        href: "/services/production",
        serviceImage: "https://future-movement-beatz.s3.amazonaws.com/featured-services-track-production.jpg",
        serviceTitle: "Production",
    },
]

const GroupedServiceCards = () => {
    return (
        <Container disableGutters sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', minWidth: '95vw', minHeight: '60vh' }}>
            {services.map((each) => (
                <ServiceCard
                    key={each.index} 
                    href={each.href}
                    serviceImage={each.serviceImage}
                    serviceTitle={each.serviceTitle}
                />
            ))}
        </Container>
    )
}

export default GroupedServiceCards