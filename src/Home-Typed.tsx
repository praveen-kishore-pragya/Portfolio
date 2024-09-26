import React from 'react';
import Typed from 'typed.js';

function HomeTyped() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Software Developer.', 'Full-Stack Developer.', 'DevOps Engineer.'],
      typeSpeed: 50,
      backSpeed: 25, // Speed at which it deletes characters
      backDelay: 1000, // Delay before starting to delete
      startDelay: 500, // Initial delay before typing starts
      loop: true, // Loop through the strings indefinitely
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}


export default HomeTyped