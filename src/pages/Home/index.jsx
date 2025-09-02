import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const Home = () => {
  // Tabs: start with no selection so they appear white until clicked
  const [selectedTab, setSelectedTab] = useState(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [activeOfferIndex, setActiveOfferIndex] = useState(null); // accordion
  const [showAllRewards, setShowAllRewards] = useState(false);

  // New: active states for the two call-to-action buttons
  const [joinActive, setJoinActive] = useState(false);
  const [bookingsActive, setBookingsActive] = useState(false);

  

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleEmailSubmit = (e) => {
    e?.preventDefault();
    console.log('Email submitted:', emailAddress);
    setEmailAddress('');
  };

  const rewardCards = [
    { id: 1, title: 'Employee of the Month', location: 'Malibu, California, USA', image: '/images/img_ai_generated_ch.png' },
    { id: 2, title: 'Team Excellence', location: 'Portland, Oregon, USA', image: '/images/img_oip_2_1.png' },
    { id: 3, title: 'Innovative Minds', location: 'Aspen, Colorado, USA', image: '/images/img_ai_generated_9088878_640.png' },
    { id: 4, title: 'Leadership Award', location: 'New York, USA', image: '/images/img_ai_generated_ch.png' },
    { id: 5, title: 'Best Collaboration', location: 'Chicago, USA', image: '/images/img_oip_2_1.png' },
    { id: 6, title: 'Creative Genius', location: 'San Francisco, USA', image: '/images/img_ai_generated_9088878_640.png' },
  ];

  const offerItems = [
    {
      icon: '/images/img_crown.svg',
      iconBlue: '/images/img_crown_blue.svg',
      title: 'Prestigious Recognition and Memorable Experiences',
      description:
        'Exclusive appreciation programs and meaningful rewards seamlessly blend to honor achievements and inspire continued excellence.',
    },
    {
      icon: '/images/img_shapes.svg',
      iconBlue: '/images/img_shapes_blue.svg',
      title: 'Fair & Transparent Recognition',
      description:
        'Exclusive appreciation programs and meaningful rewards seamlessly blend to honor achievements and inspire continued excellence.',
    },
    {
      icon: '/images/img_document_text.svg',
      iconBlue: '/images/img_document_blue_text.svg',
      title: 'Years of Legacy in Appreciation',
      description:
        'Exclusive appreciation programs and meaningful rewards seamlessly blend to honor achievements and inspire continued excellence..',
    },
    {
      icon: '/images/img_timer.svg',
      iconBlue: '/images/img_timer_blue.svg',
      title: 'Quick & Impactful Celebrations',
      description:
        'SExclusive appreciation programs and meaningful rewards seamlessly blend to honor achievements and inspire continued excellence.',
    },
  ];

  const serviceItems = [
    { icon: '/images/img_clipboard_tick.svg', title: 'Meeting Room' },
    { icon: '/images/img_document_text.svg', title: 'Travel' },
    { icon: '/images/img_calendar.svg', title: 'Accommodation' },
  ];

  const leftColumnItems = [
    { icon: '/images/img_magicpen.svg', title: 'Events' },
    { icon: '/images/img_ruler_pen.svg', title: 'Entities' },
    { icon: '/images/img_color_swatch.svg', title: 'Employees' },
    { icon: '/images/img_ruler.svg', title: 'Hosts' },
    { icon: '/images/img_smart_home.svg', title: 'Committees' },
    { icon: '/images/img_triangle.svg', title: 'Performers' },
    { icon: '/images/img_triangle.svg', title: 'Quizmaster' },
  ];

  const rightColumnItems = [
    { icon: '/images/img_magicpen.svg', title: 'Volunteers' },
    { icon: '/images/img_ruler_pen.svg', title: 'Vendors' },
    { icon: '/images/img_color_swatch.svg', title: 'Guests' },
    { icon: '/images/img_ruler.svg', title: 'Merchandise' },
    { icon: '/images/img_smart_home.svg', title: 'Goodies' },
    { icon: '/images/img_triangle.svg', title: 'Helpdesk' },
    { icon: '/images/img_triangle.svg', title: 'Feedback' },
  ];

  // helper: open/close one accordion item at a time
  const toggleOffer = (index) => {
    setActiveOfferIndex((prev) => (prev === index ? null : index));
  };

  // Reusable class helpers for "white default -> blue when active"
  const btnBase =
    "rounded-[20px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] text-[18px] font-proxima font-semibold transition-colors duration-300";
  const blueBtn = "bg-blue-600 text-white border border-blue-600";
  const whiteBtn = "bg-white text-blue-600 border border-blue-600";

  return (
    <div className="w-full bg-global-11 pt-[76px]">
      {/* Header */}
      <Header />

            {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/img_vdart_1.png')" }}
      >
        {/* News Ticker - Moved down to account for fixed header */}
        <div className="absolute top-[60px] w-full bg-black/40 overflow-hidden"> {/* Changed top-0 to top-16 */}
          <p className="animate-marquee text-global-5 text-[14px] sm:text-[16px] lg:text-[18px] py-2">
            Crafting unforgettable moments, we redefine appreciation by seamlessly blending recognition, celebration, and motivation into every achievement.
            Crafting unforgettable moments, we redefine appreciation by seamlessly blending recognition, celebration, and motivation into every achievement.
           </p>
        </div>

        {/* Left Aligned Content */}
        <div className="w-full h-full flex items-center px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col items-start text-left max-w-[600px]">
            {/* Hero Card */}
            <div className="bg-global-2 rounded-[24px] p-[32px] shadow-lg flex flex-col gap-6 text-center">
              <h1 className="text-[48px] sm:text-[72px] lg:text-[96px] font-proxima font-semibold leading-tight text-global-5">
                R&R 2K25
              </h1>
              <h2 className="text-[36px] sm:text-[56px] lg:text-[72px] font-proxima italic font-normal leading-tight text-global-5">
                XVI Edition
              </h2>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-proxima font-normal leading-relaxed text-global-5">
                Crafting unforgettable moments, we redefine appreciation by seamlessly blending recognition, celebration, and motivation into every achievement.
              </p>
            </div>

            {/* CTA Button (no color change requested here, so leaving as-is) */}
            <div className="w-full flex justify-center mt-6">
              <Button
                type="button"
                onClick={() => {}}
                className="bg-button-1 text-global-5 border border-global-5 rounded-[24px] px-[24px] py-[14px] shadow-[0px_4px_4px_#0000003f] hover:bg-global-3 transition-colors"
              >
                Celebrate success
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="w-full bg-global-11 py-[52px] sm:py-[78px] lg:py-[104px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[80px]">
            {/* Left Content */}
            <div className="w-full lg:w-[40%]">
              <div className="flex items-center mb-[28px]">
                <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-proxima leading-[40px] sm:leading-[60px] lg:leading-[81px] text-global-1">
                  <span className="font-normal">What we </span>
                  <span className="font-normal italic">offer</span>
                </h2>
                <img
                  src="/images/Star 1.png"
                  alt="star"
                  className="w-[40px] sm:w-[60px] lg:w-[80px] h-[40px] sm:h-[60px] lg:h-[80px] ml-[23px] sm:ml-[35px] lg:ml-[46px] mb-[6px] sm:mb-[9px] lg:mb-[12px] self-end"
                />
              </div>

              {/* Accordion List */}
              <div className="flex flex-col gap-[24px] sm:gap-[36px] lg:gap-[48px] mb-[63px] sm:mb-[95px] lg:mb-[126px]">
                {offerItems.map((item, index) => {
                  const isActive = activeOfferIndex === index;
                  return (
                    <div key={index} className="flex flex-col">
                      {/* Row */}
                      <button
                        type="button"
                        className="flex items-center gap-[16px] text-left cursor-pointer"
                        onClick={() => toggleOffer(index)}
                        aria-expanded={isActive}
                        aria-controls={`offer-panel-${index}`}
                      >
                        <div
  className={`relative w-[48px] h-[48px] flex items-center justify-center transition-all duration-300`}
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  className="absolute inset-0 w-full h-full"
>
  <path
    d="M50 0 L57 18 L75 7 L78 28 L96 22 L90 42 L100 50 L90 58 L96 78 L78 72 L75 93 L57 82 L50 100 L43 82 L25 93 L22 72 L4 78 L10 58 L0 50 L10 42 L4 22 L22 28 L25 7 L43 18 Z"
    fill="rgba(0,0,0,0.1)"   /* Transparent grey */
  />
</svg>

  {/* Active/Inactive icon */}
  <img
    src={isActive ? item.iconBlue : item.icon}
    alt=""
    className={`${isActive ? 'w-[22px] h-[22px]' : 'w-[20px] h-[20px]'}`}
  />
</div>


                        <div className="flex-1 flex items-center justify-between">
                          <h3
                            className={`text-[18px] font-proxima font-semibold leading-[18px] ml-[16px] ${
                              isActive ? 'text-blue-500' : 'text-global-1'
                            }`}
                          >
                            {item.title}
                          </h3>

                          <img
                            src={isActive ? '/images/img_minus.svg' : '/images/img_add.svg'}
                            alt={isActive ? 'Collapse' : 'Expand'}
                            className="w-[24px] h-[24px]"
                          />
                        </div>
                      </button>

                      {/* Expanded Content */}
                      <div
                        id={`offer-panel-${index}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isActive ? 'max-h-40 mt-[12px]' : 'max-h-0'
                        } ml-[64px]`}
                      >
                        <p className="text-[16px] text-global-2">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

{/* Join the celebrations button */}
      <Button
        type="button"
        aria-pressed={joinActive}
        onClick={() => {
          if (!joinActive) setJoinActive(true); // ✅ one-way only
        }}
        className={`${btnBase} ${joinActive ? blueBtn : whiteBtn}`}
      >
        Join the celebrations
      </Button>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[54%] flex items-center justify-between">
              <img
                src="/images/img_hand_holding_go.png"
                alt="Hand holding trophy"
                className="w-full max-w-[626px] h-auto rounded-[22px] ml-[41px] sm:ml-[62px] lg:ml-[82px]"
              />
              <div
                className="w-[6px] h-[427px] sm:h-[640px] lg:h-[854px] bg-cover bg-center bg-no-repeat ml-[20px]"
                style={{ backgroundImage: "url('/images/img_rectangle_3_default.png')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Rewards Section */}
      <section className="w-full bg-global-9 py-[51px] sm:py-[77px] lg:py-[102px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] mb-[33px] sm:mb-[50px] lg:gap-[120px]">
              <div className="flex items-center mb-[20px] lg:mb-0">
                <h2 className="text-[24px] sm:text-[36px] lg:text-[48px] font-proxima leading-[32px] sm:leading-[48px] lg:leading-[64px] text-global-1">
                  <span className="font-normal">Latest </span>
                  <span className="font-normal italic">Rewards</span>
                </h2>
                <img
                  src="/images/Star 1.png"
                  alt="star"
                  className="w-[40px] sm:w-[60px] lg:w-[80px] h-[40px] sm:h-[60px] lg:h-[80px] ml-[23px] sm:ml-[35px] lg:ml-[46px] mb-[6px] sm:mb-[9px] lg:mb-[12px] self-end"
                />
              </div>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-proxima font-normal leading-[18px] text-global-2 text-center lg:text-left w-full lg:w-[46%] mb-[4px] sm:mb-[6px] lg:mb-[8px] self-end">
                We celebrate exceptional achievements with meaningful recognition, inspiring stories, and personalized appreciation, ensuring a memorable and motivating experience for everyone.
              </p>
            </div>

            {/* Tab Navigation: white -> blue when active */}
            <div className="flex gap-[16px] mb-[18px] sm:mb-[27px] lg:mb-[36px]">
              {['Individual', 'Team', 'Credo']?.map((tab) => {
                const active = selectedTab === tab;
                return (
                  <Button
                    type="button"
                    aria-pressed={active}
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`${btnBase} ${active ? blueBtn : whiteBtn}`}
                  >
                    {tab}
                  </Button>
                );
              })}
            </div>

            {/* Reward Cards */}
            <div className="flex flex-col gap-[42px] sm:gap-[63px] lg:gap-[84px] w-full max-w-[1208px] mb-[42px] sm:mb-[63px] lg:mb-[84px]">
              {/* Break rewards into rows of 3 */}
              {Array.from(
                {
                  length: Math.ceil(
                    (showAllRewards ? rewardCards.length : rewardCards.slice(0, 3).length) / 3
                  ),
                },
                (_, rowIndex) => {
                  const rowCards = (showAllRewards ? rewardCards : rewardCards.slice(0, 3)).slice(
                    rowIndex * 3,
                    rowIndex * 3 + 3
                  );

                  return (
                    <div
                      key={rowIndex}
                      className="flex flex-col lg:flex-row flex-wrap gap-[26px] sm:gap-[39px] lg:gap-[52px] group"
                    >
                      {rowCards.map((card) => (
                        <div
                          key={card?.id}
                          className="flex flex-col gap-[24px] w-full lg:w-[366px] rounded-[22px] overflow-hidden shadow-md transition-transform duration-500 ease-in-out group-hover:scale-90 hover:scale-100"
                        >
                          {/* Card Image */}
                          <img
                            src={card?.image}
                            alt={card?.title}
                            className="w-full h-[220px] sm:h-[256px] lg:h-[292px] object-cover"
                          />

                          {/* Card Content */}
                          <div className="flex flex-col gap-[8px] px-2">
                            <h3 className="text-[18px] font-proxima font-semibold leading-[18px] text-global-1">
                              {card?.title}
                            </h3>
                            <p className="text-[16px] font-proxima font-normal leading-[16px] text-global-2">
                              {card?.location}
                            </p>
                          </div>

                          {/* Card Footer */}
                          <div className="flex items-center px-2 pb-3">
                            <span className="text-[18px] font-proxima font-normal leading-[18px] text-global-1">
                              Details
                            </span>
                            <img
                              src="/images/img_arrow_top_right.svg"
                              alt=""
                              className="w-[16px] h-[16px] ml-[12px]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
              )}
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() => setShowAllRewards(!showAllRewards)}
              className={`${btnBase} ${whiteBtn} rounded-[24px]`}
            >
              {showAllRewards ? 'View less celebration' : 'View all celebrations'}
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full bg-global-11 py-[40px] sm:py-[60px] lg:py-[80px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[29px] sm:gap-[44px] lg:gap-[58px]">
            {/* Top Line */}
            <div className="w-full h-[1px] bg-global-1"></div>

            {/* Statistics */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] sm:gap-[60px] lg:gap-[98px]">
              <div className="flex flex-col gap-[24px] text-center sm:text-left">
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-proxima font-normal leading-[18px] text-global-2">
                  Number of Bookings
                </p>
                <p className="text-[28px] sm:text-[32px] lg:text-[36px] font-proxima font-semibold leading-[28px] sm:leading-[32px] lg:leading-[36px] text-global-1">
                  8021
                </p>
              </div>

              <div className="w-[1px] h-[41px] sm:h-[61px] lg:h-[82px] bg-global-1 hidden sm:block"></div>

              <div className="flex flex-col gap-[24px] text-center sm:text-left">
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-proxima font-normal leading-[18px] text-global-2">
                  States
                </p>
                <p className="text-[28px] sm:text-[32px] lg:text-[36px] font-proxima font-semibold leading-[28px] sm:leading-[32px] lg:leading-[36px] text-global-1">
                  56+
                </p>
              </div>

              <div className="w-[1px] h-[41px] sm:h-[61px] lg:h-[82px] bg-global-1 hidden sm:block"></div>

              <div className="flex flex-col gap-[24px] text-center sm:text-left">
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-proxima font-normal leading-[18px] text-global-2">
                  To be Filled
                </p>
                <p className="text-[28px] sm:text-[32px] lg:text-[36px] font-proxima font-semibold leading-[28px] sm:leading-[32px] lg:leading-[36px] text-global-1">
                  1025
                </p>
              </div>

              <div className="w-[1px] h-[41px] sm:h-[61px] lg:h-[82px] bg-global-1 hidden sm:block"></div>

              <div className="flex flex-col gap-[24px] text-center sm:text-left">
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-proxima font-normal leading-[18px] text-global-2">
                  Agents
                </p>
                <p className="text-[28px] sm:text-[32px] lg:text-[36px] font-proxima font-semibold leading-[28px] sm:leading-[32px] lg:leading-[36px] text-global-1">
                  215+
                </p>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="w-full h-[1px] bg-global-1"></div>
          </div>
        </div>
      </section>

      {/* Services Grid Section with darkened background + glass cards */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-[52px] sm:py-[78px] lg:py-[104px]"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-[59px] sm:gap-[89px] lg:gap-[118px]">
            {/* Left Column */}
            <div className="w-full lg:w-[578px] bg-white/10 backdrop-blur-lg rounded-[24px] p-[18px] shadow-lg">
              <div className="grid grid-cols-2 gap-[20px] sm:gap-[30px] lg:gap-[40px]">
                {leftColumnItems?.map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <div className="relative w-[48px] h-[48px] flex items-center justify-center">
                      <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-full"></div>
                      <img src={item?.icon} alt="" className="absolute w-[16px] h-[16px]" />
                    </div>
                    <span className="text-[18px] font-proxima font-normal leading-[18px] text-white">
                      {item?.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[578px] bg-white/10 backdrop-blur-lg rounded-[24px] p-[18px] shadow-lg">
              <div className="grid grid-cols-2 gap-[20px] sm:gap-[30px] lg:gap-[40px]">
                {rightColumnItems?.map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <div className="relative w-[48px] h-[48px] flex items-center justify-center">
                      <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-full"></div>
                      <img src={item?.icon} alt="" className="absolute w-[16px] h-[16px]" />
                    </div>
                    <span className="text-[18px] font-proxima font-normal leading-[18px] text-white">
                      {item?.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Moment of Glory Section */}
      <section className="w-full bg-global-9 py-[51px] sm:py-[77px] lg:py-[102px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[80px]">
            {/* Left Content */}
            <div className="w-full lg:w-[54%]">
              <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[40px] mb-[40px] sm:mb-[60px] lg:mb-[80px]">
                <div className="flex flex-col gap-[16px]">
                  <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-proxima font-normal leading-[32px] sm:leading-[48px] lg:leading-[64px] text-global-1 mb-[10px] sm:mb-[15px] lg:mb-[20px]">
                    Your Moment of Glory
                  </h2>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-proxima font-normal leading-[18px] text-global-2 w-full lg:w-[84%] ml-[18px]">
                    Celebrate your achievements in an unforgettable way, where every recognition is designed to honor your excellence.
                  </p>
                </div>

                {/* Service Items */}
                <div className="flex flex-col gap-[16px]">
{serviceItems?.map((item, index) => (
  <div key={index} className="flex items-center gap-[16px]">
    <div className="relative w-[48px] h-[48px] flex items-center justify-center">
      {/* Changed from square to starburst */}
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  className="w-full h-full absolute"
>
  <path
    d="M50 0 L57 18 L75 7 L78 28 L96 22 L90 42 L100 50 L90 58 L96 78 L78 72 L75 93 L57 82 L50 100 L43 82 L25 93 L22 72 L4 78 L10 58 L0 50 L10 42 L4 22 L22 28 L25 7 L43 18 Z"
    fill="rgba(0,0,0,0.1)"   /* Transparent grey */
  />
</svg>


      <img src={item?.icon} alt="" className="absolute w-[16px] h-[16px]" />
    </div>
    <span className="text-[18px] font-proxima font-normal leading-[18px] text-global-1 ml-[16px]">
      {item?.title}
    </span>
  </div>
))}

                </div>
              </div>

      {/* Bookings button */}
      <Button
        type="button"
        aria-pressed={bookingsActive}
        onClick={() => {
          if (!bookingsActive) setBookingsActive(true); // ✅ one-way only
        }}
        className={`${btnBase} ${bookingsActive ? blueBtn : whiteBtn}`}
      >
        Bookings
      </Button>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[46%]">
              <img
                src="/images/img_picture.png"
                alt="Event venue"
                className="w-full max-w-[582px] h-auto rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full relative">
        <div className="w-full h-[175px] sm:h-[262px] lg:h-[350px]">
          <div className="w-full h-[90px] sm:h-[135px] lg:h-[180px] bg-global-10"></div>
          <div className="w-full h-[90px] sm:h-[135px] lg:h-[180px] bg-global-5"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-[1208px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-global-4 rounded-[30px] p-[30px] sm:p-[45px] lg:p-[60px] shadow-[0px_4px_4px_#0000003f]">
              <div className="flex flex-col items-center w-full max-w-[660px] mx-auto">
                <div className="flex items-center justify-between w-full mb-[8px] sm:mb-[12px] lg:mb-[16px]">
                  <img
                    src="/images/Star 3.png"
                    alt="star"
                    className="w-[40px] sm:w-[60px] lg:w-[80px] h-[40px] sm:h-[60px] lg:h-[80px]"
                  />
                  <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-proxima font-semibold leading-[24px] sm:leading-[30px] lg:leading-[36px] text-global-5 text-center">
                    Join our Mailing list
                  </h2>
                  <img
                    src="/images/Star 3.png"
                    alt="star"
                    className="w-[40px] sm:w-[60px] lg:w-[80px] h-[40px] sm:h-[60px] lg:h-[80px]"
                  />
                </div>

                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-proxima font-normal leading-[18px] text-global-6 text-center w-full lg:w-[54%] mb-[20px] sm:mb-[30px] lg:mb-[40px]">
                  Subscribe for the latest real estate news and insights
                </p>

                <form onSubmit={handleEmailSubmit} className="relative w-full max-w-[494px]">
                  <div className="bg-global-11 rounded-[34px] p-[12px] flex items-center justify-between">
                    <input
                      type="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e?.target?.value)}
                      placeholder="Enter your email address"
                      className="flex-1 bg-transparent text-[14px] sm:text-[16px] lg:text-[18px] font-proxima font-normal leading-[18px] text-global-2 placeholder-global-2 outline-none ml-[10px]"
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-global-4 text-global-4 rounded-[20px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] text-[18px] font-proxima font-semibold leading-[18px] hover:bg-opacity-90 transition-colors"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
