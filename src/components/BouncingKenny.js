import { useState, useEffect, useRef } from 'react';

function BouncingKenny() {
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [velocity, setVelocity] = useState({ x: 5, y: 4 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  
  const imageSize = 200;

  // Track container size
  useEffect(() => {
    const updateSize = () => {
      
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  

  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0) return;
    
    const animate = () => {
      setPosition(prev => {
        const containerWidth = containerSize.width;
        const containerHeight = containerSize.height;
        
        if (containerWidth === 0 || containerHeight === 0) return prev;
        
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVelX = velocity.x;
        let newVelY = velocity.y;
        
        if (newX + imageSize > containerWidth || newX < 0) {
          newVelX = -newVelX;
          newX = newX < 0 ? 0 : containerWidth - imageSize;
        }
        
        if (newY + imageSize > containerHeight || newY < 0) {
          newVelY = -newVelY;
          newY = newY < 0 ? 0 : containerHeight - imageSize;
        }
        
        if (newVelX !== velocity.x || newVelY !== velocity.y) {
          setVelocity({ x: newVelX, y: newVelY });
        }
        
        return { x: newX, y: newY };
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity, imageSize, containerSize]);

  return (
    <div 
      ref={containerRef}
      style={{ 
        width: '100vw',
        height: '100vh',
        backgroundColor: '#78f726',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${imageSize}px`,
          height: `${imageSize}px`,
          transition: 'none',
          overflow: 'hidden',
        }}
      >
        <img 
          src="https://i.imgur.com/sdH5Mis.png"
          alt="Saiyan Kenny"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        {imageError && (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ec4899',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            border: '4px solid black'
          }}>
            🎨
          </div>
        )}
      </div>
    </div>
  );
}

export default BouncingKenny;