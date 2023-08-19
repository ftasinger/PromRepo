import React from 'react';

function Home() {
  return (
    <div>
     

      <div className="image-container">
        <img
          className="xmen-image"
          src="https://awesomefriday.ca/wp-content/uploads/2014/05/X-Men-Days-of-Future-Past-banner.jpg"
          alt="Banner of X-men characters"
        />
      </div>

      {/* Plot Table */}
      <h2><u>Plot</u></h2>
      <table className="plot-table">
        <tbody>
          <tr>
            <td>
              <div className="xmen-content">
                <p>
                  In a dystopian future where robots hunt down mutants and humans who possess
                  the potential for mutant offspring, a small band of X-Men sacrifices
                  themselves to send Bishop's consciousness back in time to warn their past
                  selves. The group, consisting of familiar faces such as Storm, Wolverine,
                  Professor Charles Xavier, and Magneto, must prevent the assassination of a
                  weapons designer who created the Sentinels. In doing so, they hope to alter
                  the future and prevent the dark world they know. With action-packed battles
                  and unexpected plot twists, X-Men: Days of Future Past takes viewers on a
                  thrilling journey through time and a fight for survival.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Movie Trailers Table */}
      <h2><u>Trailers</u></h2>
      <div className="trailers-container">
        <div className="Trailers">
          <iframe
            width="560"
            height="400"
            src="https://www.youtube.com/embed/hMeKYG5y8wc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="Trailers">
          <iframe
            width="560"
            height="400"
            src="https://www.youtube.com/embed/NMxXwgQBJis"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

     

      {/* JavaScript for Toggle Functionality */}
      <script>
        {`
          const navbarToggle = document.getElementById('navbar-toggle');
          const navbarNav = document.querySelector('.navbar-nav');

          navbarToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('show-nav');
          });

          // Close the nav links when clicked outside
          document.addEventListener('click', (event) => {
            if (!event.target.closest('.navbar')) {
              navbarNav.classList.remove('show-nav');
            }
          });
        `}
      </script>
    </div>
  );
}

export default Home;

