import React from "react";
import "./StoreBooks.scss";
import Books from "../../models/Books";

interface StoreBooksProps {}

const StoreBooks = ({}: StoreBooksProps) => {
  return (
    <>
      <div className="storebook">
        <div className="storebook-area">
          <div className="storebook-area-title">Book List</div>
          <div className="storebook-area-content">
            에이트스튜디오 출판사는 일러스트 전문 퍼블리셔입니다.
            <br /> 서적의 제작 및 편집, 유통과 판매 등 다수의 전문 서적을 직접
            출간하며 <br />
            일러스트레이션 분야의 종합 엔터테인먼트 회사로 사업을 넓히고
            있습니다.
          </div>
        </div>
        <div>
          {Books.map((res, idx) => (
            <div className="storebook-list" key={idx}>
              <div className="storebook-list-content">
                <img src={res.book1} />
                <div className="storebook-list-content-name">{res.name1}</div>
                <hr />
                <div className="storebook-list-content-info">
                  {res.artist1} <br /> {res.date1}
                </div>
              </div>

              <div className="storebook-list-content">
                <img src={res.book2} />
                <div className="storebook-list-content-name">{res.name2}</div>
                <hr />
                <div className="storebook-list-content-info">
                  {res.artist2} <br /> {res.date2}
                </div>
              </div>
              {res.book3 && (
                <div className="storebook-list-content">
                  <img src={res.book3} />
                  <div className="storebook-list-content-name">{res.name3}</div>
                  <hr />
                  <div className="storebook-list-content-info">
                    {res.artist3} <br /> {res.date3}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreBooks;
