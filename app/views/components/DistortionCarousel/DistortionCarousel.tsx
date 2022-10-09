import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
export interface DistortionCarouseProps {
  images: string[];
  displacmentImage?: string;
  initalIndex?: number
}

const DistortionCarousel: React.FC<DistortionCarouseProps> = ({
  displacmentImage = "/assets/images/distortions/1.jpg",
  images,
}) => {
  const { ref, next, prev } = useDistortionEffectCarousel({
    images,
    displacmentImage
  });




  return (
    <div
      onClick={() => next()}
      style={{
        height: '99vh',
        opacity: 0.93
      }}
      ref={ref}
    />
  );
};

export default DistortionCarousel