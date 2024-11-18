// components/TilePictureComponent.tsx
import React from "react";
import { Grid, Box } from "@mui/material";
import Image from "next/image";


export interface ImageData {
    src: string; 
    alt: string; 
}

// Props for the component
interface TilePictureComponentProps {
    images: ImageData[]; // Array of images
}

const TilePictureComponent: React.FC<TilePictureComponentProps> = ({ images }) => {
    return (
        <Grid container spacing={2}>
            {images.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            paddingBottom: "100%", // Makes the box a square
                            overflow: "hidden",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            "&:hover": {
                                transform: "scale(1.05)",
                                transition: "transform 0.3s ease",
                            },
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill" // Fills the parent container
                            objectFit="cover" // Ensures the image maintains its aspect ratio
                            quality={80} // Sets image quality
                        />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default TilePictureComponent;
