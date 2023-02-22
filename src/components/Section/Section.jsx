import propTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

///// Особисті замітки навчального характеру
// import propTypes from 'prop-types';
// // імпортуємо інстальований пакет npm i prop-types для передвизначення типів пропсів

// export const Section = ({ title, children }) => (
//   // прийматиме заголовок і весь інший вміст (children) між тегами section
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );

// Section.propTypes = {
//   title: propTypes.string.isRequired,
//   // заголовку вказуємо, що може прийняти лише рядок і, якщо це не він, то .isRequired
//   // зробить попередження, що рядкова властивість не надана
//   children: propTypes.node.isRequired,
//   // тут може приймати будь-яку доступну властивість, що зазначається .node
// };
