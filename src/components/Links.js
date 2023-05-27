import React from "react";
import user from "../data/user";

function Links() {
    return (
      <div>
        <h3>Links</h3>
        <a href={user.links.github} alt="liza's github link">
          https://github.com/liza
        </a>
        <a href={user.links.linkedin} alt="liza's github link">
          https://www.linkedin.com/in/liza/
        </a>
      </div>
    );
}

export default Links;

    //   <div>
    //     <h3>Links</h3>
    //     <a href={props.github} alt="liza's github link">
    //       https://github.com/liza
    //     </a>
    //     <a href={props.linkedin} alt="liza's github link">
    //       https://www.linkedin.com/in/liza/
    //     </a>
    //   </div>;
