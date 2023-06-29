import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiDomain } from "../../Utils/Utils";
import "./Achievements.css";

const Achievements = () => {
  const [totalSales, setTotalSales] = useState(null);

  useEffect(() => {
    fetchTotalSales();
  }, []);

  const fetchTotalSales = async () => {
    try {
      const response = await axios.get(`${apiDomain}/api/total`);
      const salesData = response.data.data;

      // Calculate total sales
      const totalSales = salesData.reduce(
        (total, sale) => total + sale.total_amount,
        0
      );

      setTotalSales(totalSales);
    } catch (error) {
      console.error("Error fetching total sales:", error);
    }
  };

  const getComment = () => {
    // Add your logic here to generate a comment based on the total sales
    // Example: You can have a predefined set of comments mapped to different sales ranges
    const comments = [
      "Great job! Your sales are steadily growing.",
      "Impressive performance! Keep up the good work.",
      "Outstanding achievement! Your sales are skyrocketing.",
      "Remarkable success! You're surpassing expectations.",
      "Exceptional performance! Your sales are setting new records.",
    ];

    // Customize the comments based on the total sales value
    if (totalSales < 10000) {
      return comments[0];
    } else if (totalSales < 10) {
      return comments[1];
    } else if (totalSales < 30) {
      return comments[2];
    } else if (totalSales < 500000) {
      return comments[3];
    } else {
      return comments[4];
    }
  };

  return (
    <div className="achievements-container">
      <h2 className="heading">Achievements</h2>
      <p className="total-sales">
        Total Sales: {totalSales ? `${totalSales}` : "Loading..."}
      </p>
      <p className="comment">{totalSales && getComment()}</p>

      {/* Additional analysis or achievements based on the total sales */}
      {totalSales && (
        <div className="achievement-section">
          {totalSales > 20 && (
            <p className="achievement">Impressive! You have exceeded $50,000 in total sales.</p>
          )}
          {totalSales > 159 && (
            <p className="achievement">Great achievement! You have surpassed $100,000 in total sales.</p>
          )}
          <p className="description">
            Congratulations on your remarkable achievements in total sales! Your hard work and dedication have paid off, as you have surpassed an impressive milestone of $50,000 in total sales. This demonstrates your exceptional performance and reflects the effectiveness of your inventory management strategies. Your continued growth and success in generating substantial sales revenue are commendable.
          </p>
          <p className="description">
            But the achievements don't stop there! Your outstanding efforts have propelled you even further, as you have now reached an exceptional milestone of surpassing $100,000 in total sales. This is a remarkable accomplishment and a testament to your continued success in managing and selling your inventory. Your dedication, strong sales strategies, and effective management techniques have contributed to this great achievement.
          </p>
          <p className="description">
            These outstanding achievements in total sales are a testament to your business's growth and success. Your consistent efforts and commitment to excellence have positioned your inventory management system as a key driver of your business's prosperity. By exceeding these impressive milestones, you have showcased your ability to generate substantial sales revenue and establish a strong market presence.
          </p>
          <p className="description">
            Keep up the excellent work and continue leveraging your inventory management system to drive further growth and success. Set new goals and targets, analyze market trends, and adapt your strategies accordingly to maintain your upward trajectory. Your continued dedication and focus will undoubtedly lead to even greater achievements in the future.
          </p>
        </div>
      )}
    </div>
  );
};

export default Achievements;
