import './Footer.css';

const Footer = ({items, completed }) => {
    const leftItems = () => {
        return items.filter((e) => e.completed === false);
      }

      const completedItems = () => {
          return items.filter((e) => e.completed === true);
      }
   
    return (
        <div className="footer">
            <span className="items-left">{leftItems().length} Items Left</span><br />
            <span className="items-completed" onClick={completed}>{completedItems().length} Completed</span>
        </div>
     );
}
 
export default Footer;