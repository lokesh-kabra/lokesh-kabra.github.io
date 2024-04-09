import React from 'react';

const Skills = ({ label, svg, faClass }) => {
  console.log(svg);
  return (
    <div
      data-aos="fade-up"
      className="skill__square col-3 col-sm-2 my-3 mx-auto"
      style={{ display: 'inline', textAlign: 'center' }}>
      {svg ? (
        <svg
          aria-hidden="true"
          focusable="false"
          data-icon={label}
          role="i"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512">
          {svg?.map((s) => (
            <path fill={s.fill} d={s.path} />
          ))}
        </svg>
      ) : (
        <i className={`${faClass} mx-auto my-auto`}></i>
      )}
      <h6 className="mt-2">{label}</h6>
    </div>
  );
};

export default Skills;
