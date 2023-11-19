import React from "react";
import "./EpicenterWorksForProvider.css";
import EpicenterProviderWorks1 from "../../images/providerWorksNew.png";
import EpicenterProviderWorks2 from "../../images/works2.png";
import EpicenterProviderWorks3 from "../../images/providerWorks3.png";
import EpicenterProviderWorks4 from "../../images/providerWorks4.png";
import CircularImageForProvider from "../CircularImageForProvider/CircularImageForProvider";

const EpicenterWorksForProvider = () => {
  return (
    <div className="wrapper">
      <div className="epicenter_works_provider_container">
        <span className="epicenter_works_provider_title">
          How Epicenter Works for Service Providers
        </span>
        <div className="epicenter_works_provider_flow">
          <CircularImageForProvider
            image={EpicenterProviderWorks1}
            index={1}
            text="Signup on Epicenterwellness.co"
            isFourthChild
          />
          <CircularImageForProvider
            image={EpicenterProviderWorks2}
            index={2}
            text="Accept clients we refer to you."
            isFourthChild
          />
          <CircularImageForProvider
            image={EpicenterProviderWorks3}
            index={3}
            text="Meet the client at an Epicenter location near you."
            isFourthChild
          />
          <CircularImageForProvider
            image={EpicenterProviderWorks4}
            index={4}
            text="Get payment for the session"
            isFourthChild
          />
        </div>

        <div className="epicenter_works_provider_left_dot" />
        <div className="epicenter_works_provider_divider" />
        <div className="epicenter_works_provider_right_dot" />
      </div>

      <span className="epicenter_works_provider_partition_text">OR</span>

      <div className="epicenter_works_provider_container">
        <div className="epicenter_works_provider_flow">
          <CircularImageForProvider
            image={EpicenterProviderWorks1}
            index={1}
            text="Book an Epicenter treatment room near you or your client."
          />
          <CircularImageForProvider
            image={EpicenterProviderWorks2}
            index={2}
            text="Send the Epicenter location information to your client."
          />
          <CircularImageForProvider
            image={EpicenterProviderWorks4}
            index={3}
            text="Meet your clients at the Epicenter location."
          />
        </div>

        <div className="epicenter_works_provider_left2_dot" />
        <div className="epicenter_works_provider_divider2" />
        <div className="epicenter_works_provider_right2_dot" />
      </div>
    </div>
  );
};

export default EpicenterWorksForProvider;
