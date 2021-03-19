import './Footer.css';

const Footer = ({items}) => {
    let total = items.length;
    let leftItems = () => {
        return items.filter((e) => e.completed === false);
      }

      let completedItems = () => {
          return items.filter((e) => e.completed === true);
      }
   
    return (
        <div className="footer">
            <span className="total-items">All Items: {total}</span><br />
            <span className="items-left">{leftItems().length} Active</span><br />
            <span className="items-completed">{completedItems().length} Completed</span>
        </div>
     );
}
 
export default Footer;