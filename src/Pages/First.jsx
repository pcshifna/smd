import React, { useReducer } from "react";
import style from "./First.module.css";
import { useState } from "react";
import{actiontypeInsta} from "../Reducer/index";


const First = (dispatchInsta) => {
 
  return (
    <div className={style.main}>
      <div className={style.blackHead}>
        <p>For Office Use</p>
      </div>
      <div className={style.secondHead}>
        <div className={style.buttons}>
          <button type="submit">Instagram</button>
          <button type="submit">Facebook</button>
          <button type="submit">Twiter</button>
        </div>

        <div className={style.social}>
          <div>
            <p>Social Media Account</p>
          </div>
          <div className={style.count}>
            <p>3</p>
          </div>
        </div>
      </div>
      <div className={style.thd}>
        <div>
          <p>Instagram</p>
        </div>
        <div>
          <button
            type="submit"
            onClick={() => dispatchInsta({ type: actiontypeInsta.addInsta })}
          >
            + Add Instagram Account
          </button>
        </div>
      </div>

      <div
        className={style.selectInstaMain}
        style={visiblen === true ? { display: "block" } : { display: "none" }}
      >
        <div className={style.firstRow}>
          <div className={style.selectInstaDropDown}>
            <select name="select_insta" onChange={(e) => handleSelect(e)}>
              <option value="select instagram account">
                select instagram account
              </option>
              {option.map((op) => (
                <option
                  value={op.value}
                  key={op.id}
                  disabled={selectedValue === op.value}
                >
                  {op.label}
                </option>
              ))}
            </select>
          </div>
          <div className={style.right}>
            <div className={style.removeAccount}>
              <button type="submit">X Remove Account</button>
            </div>
            <div className={style.addNewlink}>
              <button type="submit">+ Add New Link</button>
            </div>
          </div>
        </div>
        <div className={style.secondRow}>
          <div className={style.upper}>
            <div className={style.post}>
              <p>Post Type</p>
            </div>
            <div className={style.link}>
              <p>Link</p>
            </div>
            <div className={style.deleteLink}>
              <button type="submit">X Delete Lin</button>
            </div>
          </div>

          <div className={style.lower}>
            <div className={style.selectPostDropDown}>
              <select
                name="select_Post_type"
                id=""
                onChange={(e) => handlecategory(e)}
              >
                <option value="select Post Type">select Post Type</option>
                {insta.map((op) => (
                  <option
                    key={op.value}
                    value={op.value}
                    disabled={selectedCategory === op.value}
                  >
                    {op.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.enterLink}>
              <input
                type="text"
                name="past"
                id=""
                placeholder="Enter/ past Link"
              />
            </div>
          </div>
          <div
            className={style.thirdRow}
            style={
              selectedCategory !== "reels"
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <div className={style.thirdUpper}>
              {reelsList.map((list) => (
                <div className={style.new} key={list.id}>
                  <p>{list.value}</p>
                </div>
              ))}
            </div>
            <div className={style.thirdLower}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
          <div
            className={style.postBoxRow}
            style={
              selectedCategory !== "post"
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <div className={style.postBox}>
              {postList.map((list) => (
                <div className={style.postlist} key={list.id}>
                  <p>{list.value}</p>
                </div>
              ))}
            </div>
            <div className={style.postInputs}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>

          <div
            className={style.storyBoxRow}
            style={
              selectedCategory !== "story"
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <div className={style.storyBox}>
              {storyList.map((list) => (
                <div className={style.storylist} key={list.id}>
                  <p>{list.value}</p>
                </div>
              ))}
            </div>
            <div className={style.storyInputs}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
