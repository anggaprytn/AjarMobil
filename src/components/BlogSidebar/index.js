import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import pimg1 from "../../img/post-thumb-1.jpg";
import pimg2 from "../../img/post-thumb-2.jpg";
import pimg3 from "../../img/post-thumb-3.jpg";

import "./style.css";

const BlogSidebar = () => {
  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="blog-page-right">
      <div className="sidebar-widget">
        <form className="product_search" onSubmit={SubmitHandler}>
          <input type="search" placeholder={t("key_words")} />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="sidebar-widget">
        <h3>{t("blog_page.by_category")}</h3>
        <ul className="service-menu">
          <li className="active">
            <Link to="/" onClick={onClick}>
              headlamps <span>(2376)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              disk break <span>(237)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Turbo Oil <span>(23)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              tyre &amp; metal wheel <span>(258)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              battery <span>(67)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              suspension <span>(123)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Shock Absorber <span>(23)</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-widget">
        <h3>{t("blog_page.by_tags")}</h3>
        <ul className="Tags-catagory">
          <li>
            <Link to="/" onClick={onClick}>
              Apartment{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              garage{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Condo{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Villa{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Bungalow
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              garage{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Villa{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Electrical{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Financial{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-widget">
        <h3>{t("blog_page.recent_post")}</h3>
        <ul className="top-products">
          <li>
            <div className="recent-img">
              <Link to="/blog-single">
                <img
                  src={
                    "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QO8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBSaWdodHM6TWFya2VkPSJGYWxzZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFERDczQjk4NEQ0RkU2MTFCRTFDRDk3RTUzMjQwQTJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyNDYyMzFERDhCRTExRTZCRDU1OTQwRUU4REUxMDQ2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyNDYyMzFDRDhCRTExRTZCRDU1OTQwRUU4REUxMDQ2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZDNUMzQUE0MTZBN0U2MTFBOTI3OEJEMTY3NzRBNDBFIiBzdFJlZjpkb2N1bWVudElEPSJ4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"
                  }
                  alt="recent "
                />
              </Link>
            </div>
            <div className="recent-text">
              <h4>
                <Link to="/blog-single">
                  How to set goals for you and your team{" "}
                </Link>
              </h4>
            </div>
          </li>
          <li>
            <div className="recent-img">
              <Link to="/blog-single">
                <img
                  src={
                    "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QO8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBSaWdodHM6TWFya2VkPSJGYWxzZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFERDczQjk4NEQ0RkU2MTFCRTFDRDk3RTUzMjQwQTJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRFRjJBQzhFRDhCRTExRTZBRUJCOUFCOTZCRTc5QkJFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRFRjJBQzhERDhCRTExRTZBRUJCOUFCOTZCRTc5QkJFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZDNUMzQUE0MTZBN0U2MTFBOTI3OEJEMTY3NzRBNDBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFERDczQjk4NEQ0RkU2MTFCRTFDRDk3RTUzMjQwQTJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgARgBGAwERAAIRAQMRAf/EAJwAAAICAgMBAAAAAAAAAAAAAAcIBQYDBAIJCgEBAAICAwEBAAAAAAAAAAAAAAMEAgUBBgcACBAAAgIBAwMCBAUCBQUAAAAAAQIDBAUREgYAIQcxE0EiFAhRYXEyFSMWgaHBgiRCciUYCREAAQMCBAMGBQMFAQAAAAAAAQARAiEDMUESBFFxBWGBkSITBvChscEyFBUH0eFCYoIj/9oADAMBAAIRAxEAPwA7cN8ex4vBwUcPx+wOKcVWBbleFgkhWV/nd3IYtIw3OTp8x7dtQQgxlU4KfYihJxjiXPobVSzgMr4jwstO5Uxwykf0mTsWwBJWs1rIYsARrt0JDaHcuoAM5W4Gkgy9Gco1BdLvl85nLHBeN8cp+UcXjeX8Azd/AcwzeXrM1ibBrM9nHspZoYYy8SSrI0bExhRtCar1O1IaQCV65E6nAxWvzLJ8Q51wyfg/CslbVXq2HbJos6RTtP8A145oJn0FqMlVLsu4aHax79FjGroUjxSWcfxdrG2sjTvRCG3Evt3a+vcaIyOg09e+v+nS14ujwCOOHS7/AG9TFOlHNgzGi1ANxYfuDklvh2/wOvQBHipEoHc1xRiechdUsRlgNOxIOhH+fWMFkJPeT4+SbMUs+tGK/JTX+HykEq67Tu3VJf1K6pr+K9WW3AkGS1w6S6z+0WiEJoV1gjJdaaxhQ0h9WfT52f4glu3TmhB1L0K8SyWcyGatcbwvM8dx+7jqjZt8Nk0EiXCuxYZBGGjkkRdjI21tB+umtRAkuHZqpshgC2KpfNPJ3GeD8FvZDyDaW/5Hs5Sa9xvhRRErRyK5b6swtJadIixMgZn3KdO+7RevGQjEtj8lkRM5AHBLzX8e4rP8Hy/Juc4q1yDJ8ihu3sphY4hPMIbAjEXt13B0mCR7tANQWK/l0C2e2qNdIEqYICcf8aZTyJzviPG/CGOf+DnJX+zbDyUp681htJsgthGYwSQoCzHtoo/aw1Tq3sWhORq1HfKiRuzIjg+Tc1eeE4W1mOScmw3MpatvknFMjNSys6IqmeXGzmITEDQaSFfmIA109Br0LeWPTmy9Yu6oujxax8a42gscCRQgMqxoNqgHVlI0+HSJCOlk8lVCIDPEVRaW/wComY/KoZToSPU99O3WApJDeSyZDBrlbZ2/TZWARvVmQN7zK4eNkHZgVI7afn8OnrRaQZAnhVCM53Otpd93VY5dDBtX2ghO3TT016bc4pdw7L0D+R/HXGee061PktS1FbxTs+IzuPnepfpu4Af2Z4iGUMOzDuD8R1TEPXNPxmRTJB7jHgrhfF8r/KRJkuS5NZFkiv5qybTLIhJRwCFUsuvYkE9CmZHEqYnwDLa8reZ6vCKtrh3F7UV3yJfgZLDRspTCViuslm0xO1JQneNW/b+99ABunatmVcl4MKlLJ4J8rZD7SPKWG8j2+LLmOKcirX6eLrjIxuZZJEQSWZfbErQsC2qKw3FWJPc9tjtRa3puYlVM56pmUMAoi/5v44nIvIHPr1w4nIczyGQnXjlRHszQpbtPMULAADQEAMxHQN6TdlTAN8kXbxFuNc1TZ/uiy+Kkiq8VwVuYQRLtjytgmFkKjQiFCxPY/L83b8+kjYEij+pRcM99w3CpKk8q18lybL5BWkXBtC1eGjNJ3KySSdmKnsCqt29NOhR20n4BTNwJaM/ybJcpvPcvpBCgX2oasakJCmupVCST+rE6npyEBAMECRMjVU/QfVex7etAPuMB19sEnXUfh3GvRMkPN01nD/vL8i8NpphqecrZ7EVV2U6WdrfWGFB6JHJ7kMwUDsF90gfAdJT24KZFxsQpXJ/d1zPl6SVbHLrHH6dgFbFbiuNr4yZlI7qcjbs2JYgfTWMa9RjtWyUjeAQGuc4OZAxWJwh4tiJpAbOthrEtx1O5pLlmQGSdie47omvcJr36YhDTUoVyb0CmMD7uSaPF2M09upFei+gw8u0pE0jAsUBkbYSqksw9QNDp14mXqQHNGsxj+nvTJAI0gUqXOXBmr4IgeUMQuO41x67L7TSpl8tjYkaTaprxOkqpqA2gUue/59AtzP6m7DKh7yrPe2gel7W+TXVOH/MWI+ZPil9FySq8zQyrVhBYRfTrukKuNG3ySdh/tHTaonChDPDuJQaFj83fUn9dAOshYMivjWNo0Ua6fj6dZWHXAEsGlQs8kTqJgP8Ao3AkMx/M9gOsL2bq7txmaf6dMRSAiX5pL0keiWEb9uxSuoH56j9OlzcCPGJaqwT8DSpE0163ToyMC0c8s305B/7SSp68LrrBiq5Bklx8rBZYsv7XyyLuTYfgNGGmv+B6nUrBZEzgGQwXL+ZcS4xYpW6Lcgy9KhZhB+WRZZ0U6TIQykDv316he/EngD9EXaylC4GYgkODUGuaar76OC8Y8NDxj4vwJgoivDfzF2xJ7tp5Z7LxxAtIx3gEIxC6Afqe/SfT9RMpkGrBzmR29jjxVp1fczuxt2yQBFyIxAiIvm3a2J4Kofan9tWC8uXs1meeNYyODo1PfwXHo5GxpzMiOyzNFI4ctHBt0b2+5fRdV79Y3m7lE6YFuJQ+m7OFx5SDtl9yma8j/wDzgxSTR5ziHKjxDi0mMuW7H8vrZFe3FEZK8BJdCIXb5TIW1XT9ra9L2eoXIflUccE3f6Van+PlPiuvrN+Iqb+bMB4l4Nzevy7E8tnw9fjnNYoAld3ysMRb3YkZ3HsTu8TBSf29WhvkQ1kdyoBaDspo+EbiVBx6Ow8/JJch/GT246DCtA/1HtrNLNvLasi7lTYG/Lt1WfvI1MwbnU/Ljmn/ANuOl3+jD549lFq42fkucMWP43iL2dkkDxxV8VQntE723aAoHHbXTqxOnNIAlW3/ANWPMdjFz8q5BwOTjGAoLElvknLchDSgrRu4jjEgZ3mQFmCgbPU6ep68bwFFkQOKjqf265+5YoV/57BVVut3FVrNj2U9kymSbSJNoU/IdfQ/l36GdzxBZeYZKwcV8O1uI8YyHkhMtkb3IcFymrjeFGKGJaVpEgexPbjVozK7xyiNEUHQlu+umnV70baDczvCY8sLUpSB8PkHPckN9ufS9PQaynEBkQuSeOeTfcfZ8hXGmnyvk7E4NuRYGOdpDNk7uOlhbI1YhLoC30rNsRRoGTaAo7dbj7y2FjbdNsXbMRG3CQAbAxuB9XaHEa4nMutb9u7+9e3t23ekZTkCS5rHSWAPAmpbAZBSP20eVuP1ZVxHJefWeJxYXH2l45xq0y16CZKzOstnfIdCocp8qv8A0yTtk2fuPItzYkCZRqDn8ZLo3T90LEwZCma7FuFfc1xnyLSyOOhyNXA8P4VVr2OaZi+TFNNM8h9mnWWTeNZXUKXGo1PygDTo206Vud5et7e1Emc8hWgxP/IqUzvOq2LELm4nICEe6pwHfkuu3jVnxlwfzvifLKccylqnxrPfzdPgVazGsVKOMSSQ1VnmjBCRysGHbsPlA9Ouy7r+M9vb2ptQ3EpXg3mIAh2+UV73XJdn7y3u63HqysQhYLsASZngxw+QUHL5BydznNbnwwmuAxOebMNweCzPHjAsltrAawRoklgySblkZOzadvh0ja/jXaQ2k7fqTlckR56eRiMBgxZtL4HF1cXPdM/Wi8YgMQI5yoa8XGL8QpjK+Q/Nli5kcH4u4byLmOIwUs9G3l4UsrWkljdwwrRwsoKbFGpBOp107dcp0wjWVAVs7Elnqr34ewfmDy1475PyDPYatexMeTjw2D4lZyF6pHYkg0ktTymOXUJCWQAAglgw+HUL9+NuUQPjgiWrGpyUu/klOYcX8zYzjeUuLjaoqUvrMBi7E7Y9klhTcP6zu7+4O7lmOpJ+HbrffbvT7W4/TynGstWPESIBWqdc3k7Fu+In8W+gomk8mcq4rmvFfiyrjcwamf4yrf3FjCGSGIwSyGtImvyFgCNTprp8Tpp09Zgen+6ZRvRPpbgSgCW0nyidRwcaXbNJ7aR3ft2Fy2f/AEtsf9vyMaHiMe5ASrYEuZnydY2aDyR7Undn+rL3pNZJXkLFy8i6Hvp2OgXT16ts7NkH0zECDACJFGyoXyA5UYLRtzO9oM9ZlNyTIHEjk1HJfjVytjJ8ewN33LlijTN+Ww/uWZII2lkMiuurSMNSW7HUnp+XR9gA8bFsGuEI8OSqodV30Z1uTkGH+RahHaonh/B/4DOxV6NqOvjspXm+qjrsx22K7Lo7JrtDkBtDp2+HVfsOj2dluBctxjgRTEEtUcHGPIK56p12W92hiRIViSDhIV8QCc1f7PD8XSnlH9WzLZn02SPoW9xiWZmA3MQO579W36eLvi/xiqi11e/KDBoiI4cBSmAVufD4qOhFiTBCtWdTCtPb8jAIWPb8Rt11/Ho2iOnS1FUDc3jcN3UdWL5/HYrbybnGa5BBj81x/wC6GhwKmy2F41FX4/GtqfHQySRp7jwRGZjvQI24buxLjd6/It25cJpFwvpaFuEcceKl/HflHkWH40mGoecuLeRrq+5GvCZqK1chJkresjw14QtaeZwxaTXad7El26d2nW93tjFoRER/qMOYZQubO1fLElz2/wBUm/l3I8hznljCZzk1WGpl5kigsQV6/wBKiLENsY9vVtDt0J1Op9euh+05GY21yUjKU53STIuXMnbkMIjIUWn+5YCI3EAABGEGbl9eK2cHYrZbyVyHB8ima1iI8FDcxleU6JFZRlUFSCoG4a9ie+nWs/yff3G134nZkYmOiUWyLVbvCsv49tW7/ThG4HHnBfg/91EUeRpWyceKz1ezQbGzSWKsq12VJXLvEJ5Z3J1Ee3Rfhr+nXS+je8dnONs7yWmWkFwCYkkYkh25MtV6v7dv+cbRpB2IJqAP8QKY5l3WbM85wlj/AMVjb8T5J7ESVEZ11LN23blYhj3/AG9bXD3HsNz5bN2JkSwq31Y9yoLXt/d2Ja70CIgF8/jmi3gLdS/DjMgq/TWyf+fU7BkZ9fcUkfDcSdT1ZWrnqREmY5jtzVJudvOyZQNRkezL5KwyWYUsm7K4NcROIu+7UN6kH/b0Z3S8bZENIxooo3LbyrkpiGeIE06akALESA7t+LEHXTqWqiJ6UfwHee3IcloX8dyzH8g5nT8b8gx+d8Y/z9x8XmJK/sz+65BsJHFZWJAEbsOxX8CfXr5AsTLB4nU2XDxX0ffEXLkN90TPCTcPxVLyPLZHG+Tc/sFWw9TlKQwZqC9FBL7aYR6ksC/1Sx3FA7Aqu7bqNTTAMMWPIuh2ZETDRePNK/5HsZS3yzAWMvQrYvLNbGlCq6Oix7l01ZHkGu3XXVtfx66R7SDbXaaXJ9aeOLeV/utP9yl7+6dgPShhx839kRPC1fg0nnHIWOfXacOITi5Q0bvujfZawPZdSkTp2UMDuYHQ9ge+kP5E0fuEePpj6y+yU9mv+3F8PUP0H3WP76pPHlfP+MHxFQZEtg7qiGKeeCNIBYQxMC8TBgxLAbCNNPz60y0C1PjxW12dNWZImcpiV9n2eM1y4YeyXsW3JbXtptlj769T0l8S/wAdiYfkmz4wvI5sTWt2JI6nIhEy3MSRqG2yEBjJGJAjs2hGpb9B133o53UtvE3Q11vMC1TxcOxOOdeC5T1b0I3CI1tPQ8O4s45N3q4ytmbCqLqPQUj/AJDMYpWC7gT7e3t69uw6vgZHJvBUsRaj+J1cMRlnmpALGI2+Z339vVxKmh9ddu4sW/L/AC6KDRLF9Xw31ZmX/9k="
                  }
                  alt="recent"
                />
              </Link>
            </div>
            <div className="recent-text">
              <h4>
                <Link to="/blog-single">The best ways to pay Drivers</Link>
              </h4>
            </div>
          </li>
          <li>
            <div className="recent-img">
              <Link to="/blog-single">
                <img
                  src={
                    "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QO8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBSaWdodHM6TWFya2VkPSJGYWxzZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFERDczQjk4NEQ0RkU2MTFCRTFDRDk3RTUzMjQwQTJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyNDYyMzFERDhCRTExRTZCRDU1OTQwRUU4REUxMDQ2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyNDYyMzFDRDhCRTExRTZCRDU1OTQwRUU4REUxMDQ2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZDNUMzQUE0MTZBN0U2MTFBOTI3OEJEMTY3NzRBNDBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFERDczQjk4NEQ0RkU2MTFCRTFDRDk3RTUzMjQwQTJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgARgBGAwERAAIRAQMRAf/EAJsAAAMAAgIDAAAAAAAAAAAAAAYHCAMJAgUBBAoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQYQAAEDAwMCAwUFBQkAAAAAAAECAwQRBQYAEgchMRMUCEFRcSIVYaFCIxaBkbEyosHR4VKCM0MkCREAAQMCBAQEBQUBAAAAAAAAAQARAiEDMUESBFGRIhNhgaEF8HHhMhSxwdFCBiP/2gAMAwEAAhEDEQA/AK1a4olxyHcfuE2G0gDw/DcD6CfelUd0qp8W9cuW3kPsktgvA/cF2DcTkqz9GbsiYhBoUShtJp7Pz0sq+/UBvR8VCLZ8F7qc7zOA2DdsX80wP5pMfekEe+pCk/1aL8mQ+6JVdkHArq8ljYpiKrW5dpNwfmcixIeT3tMkl5iIlZcLcZgoQlSGxsSdpr1JNeuiN9nEj9Aldl8Bmh9+0cfZSGGUrhXEuro2A4EvJKq9qbV1+Ok3NExVimx1xK48pYe3i3B2cPxCpbeI2+Zf7Q2/RafGisLcS24Om5KgSD7aHTNnAiVMAg3DTDHFaw8/9I/OeSsQM1EGzy4GQQI1ydmxHlN7PHYQ6pUhtW47huqooJBoKAa6HfjGNQX8EgW3OIZOjios8UYbZsBcsMli2xXHZN7vUaqJs+Q+auOkObSgGgAI67QAmnfXLn7gDLqDFaBtiR0mn6qzkwbSvC15R+n5EXj1lgAmYz5d2UqoHhQYivzZK0KVuWpI2oSFKK6jWnLUkNXSmjb+PsxtoQuXxlcYHQHxbNclmn2htaXT+wnWQxMf6kfIrVqfMcl37dwutvQWHRllvLXTwJMBEqnvrRYUR/p0cZyy1cnQnT4c1jOQbyA5KtylqO0pn2+RBdP2b0oA+/R92QxbzBCmkH4detyLBV9ZYi5Ba4d2kWm2RIrflJrO1DfhJLYLEn2hNK0T1NTqXSCWIdDAEVdBFpwqzS2ZOSwI0e0rsa/ECpqFJbCkCqlAsrUFbR2CU9T01m7UTUBk43JChLpW82TJuc4Lndw/V7FvYh4vPYYxqOtbDLrflVqdLiJAQpa3VfE9kjTbLznEiTAZJcukFx5pj8Yp5a/TOC29CbXkUJ6zwFwrM9saJaTGbKVOLRRCkpFD1JA7kV7M13o4NIJemBxcIj5Dk4W1Ngpy20ybvJYWHX2MejAW5hQ6ndI+V+Q4lXtRsQPcrSfyQJ9Q9HTO08aFDUq+8Nz73bMxezq9KuFibcjRMcX5xUhMd5lcZTLaVGqU7HCClPSnQmh0ZnZJ16z6oNMvt0rWJB9fHO2KXh5Foze7XViOyyhbNyluToxKGgFOALNauEbyon202jW3TcMtRl5Afyurvt5spWRZ29kghnnI9Z8o0HrRDV/9Z3O+Z3IT7zm11XG31iQ4zm2OwQoHoy0WVLAFRRS+x99DopwEg1FxwWVf8L+v672N9u2Z5itszCztijj6mFR5zaFGpTVwLB29hv3k/wCbUt2wzSVHFbSckyDgTJcZZyTKVW6zOXC3Mz0pkeAuUph9seEoFvxkuJpQVSTTsadtXcsQGSqFwnBT/i3F+NZTccX+lS3Y9mlTHZEXyT7rLC0uBoBwIZcQCdtO5/t1h6S0WxKcXxdN/mDhmx2jibkKfJvk11m343ciUPBt8KHllgCryVrSSaCoVUa0x2p1AgoO5xUC5P6ueFcPxfDrEm4u3Y2ezxG3oWPWp9pqHJEZtLrTkxUmGVuBQ+Y/P8aazz2VzB/jyKMXQEzeJc8wLnKwWTJLZe79NNyuj1pdxEKbfkRHWEFweaefDpaS6gbkbVGo+0aR2rkZAHH5/wAojIEPkqAGMzfoZhRuNZDMDeV3J+RCSmQ6wXAUeWfK1FQCgHFUUmiQSUntpumT4en7/VBRfNfm1metuQX+DPZRY7ixdpUe6WjxUOKjSmVFDzDikqFfDUCKgdddSctUnZkAgAMV4xDjljKMrsdlyKbIs9pnJKlONoW286v5VFNVo+WjdSFEFIp16VOlzmYRcKaasj8YxlmN3u54tj14k3RdpkoTAmsrWH3IrzKXQ0tSU/MWiaftqOhGqjKMg5ChBGCozi79QQvpsPLrTPTFk3Fapt3U+lKY7LyNjxDdd1VoqFBKevx0x4u4PkgW23073K1xbPhbAnIbMS6y7amOtYTs2ONIaRQ9qhJCffTWS/D/AKgjimxPSVSfqKzBjEeKcsefiMTG7va7hAUiS6GmgFw3lKKjQ90pIH2010LcRJ6scku3IRnEyDh6r5zc2yAZhgEDGGE4pBxO23B25uSbhdWId3kCOjf5ZDLlSTvUpIWKhwKIQlJKtEY1cosKJz/+buaSFcqOYc2y3FsxYcv0plDEZreuK2tlCC6qiipRfAoFBIoPerWC5aHcB4lvqtNy+TajCjBzR3rkcssufDYXaubeVbjxXkWQjJ3PO49nxtD8JtLBkKjSJdvLDC5Smw2ltDK3kHaCorWgfyAnTg2kh1jfNHOY8M+irKMnunKOYW6yvy7lMiSr4pm6Sfpt1mOFDjLztvjOqbfUVAbyEUJFHK9daTt7jYHkld6PFAnq6vnCnJeDx7ha7Xa8lk4vcoYm34wCyqOSAGmRIW2250QqtAdoB1f48oh5DEUVi4JGhVM51gvp9tODXeyI47xC5WuXEXBkWC3fToEp1t5OxXgv7mlJcFa70rCx3BrpBgTkjdkDcZ5RwtF4xtGP4/jdmwZvwZ1mhY9cX25l2b2eM2yXHglxS3HXqkbnD0UFV9gbbtTmCWwQSuAFuKjnH+U0YFkmQWz6XAkx7BnrT8vdHLkpQlFGwhRdQn8str2V7H29dDK0JF83OeXJMyL4N6qruTuX+KOZ+NBaXrsuGzNfV9dtTqAmbFhEPR5DlaLRuQkkggqHb4aPToJCTEkgFQf6iMO9IvHfEMCfxSmFkvI+NtWqHbblKUhXmExX3VuTZDQb8F5x1ToS7uQUqSlIoNvUYiNwESrRaoSlAghGdnvHpJsN1wXlfH8fYtV8xTE27PmWCrRAS1N8w4kqkqSA23IkIcQQpdR8lKJ7aOWwndhrBiwIfjXCnBYZ7+MLotmMnkCxanTiH48EM4xlnG9vwPkjCLjjr794vORQ7xjkluKpcBiIZMGXJadUn8tG7ydBuFSOgPU6Xpj5LQ5U+weHvU9Ees93f4pOMxYUrelq/XaBb25JLagGwQ6pVUk7qAE9O2vXe7f6WO8tduFuQrmy8z7X/nztLvclIGjJ1Hhb1BXXGMntt0sLKkZu0mHbrXbPOyIsSW75dCZkqe+yw2G0JaP+2F0r3przd7c6oCJDN4+Lr0Fuw0iRV0eY7xlcLjyDkfGmZ8x3BH6Lgl+Rksi3NQ4N0lteDWLFVLkulfV3Zvp1UkjafaiwO7cjB6Egcyj3EzZtSmBUAnkHRjwbxVG5JueZXm/ZhIskDim+RPpUKI63HemuwWzIW7OddSrchQUhJQ2EAU69xrse77IbC+LdsnSYgl6rkexe5T9x23euAanIDUoEsMxx3jBq6cj5pl1wzi5CdmTkG4Y9x+0mZLaahstvxJbyGgp5ptanlISsEJKumuLJ9RqwXdFYgMrVxf0rcW3bBsauuNWm44erKbZEl3STeG3ZWQOsyh4q4U4y3nWkb0uFLqQjdXoFJ1GMi6CgoufM/pA4lyDjmZjOMWHHsCuqpMJ2TebbZ2fNvoYeQ44z4hdqEObeorSoFegobtgRwUMiu2awmwYhhOO2SVi2AXWZYoENtp4WZbTIkMITudCVOPKBKwVbga166ogMrBKQeLY7dbLB5Paki2TJOa5Ha7tblxGpgtMOJb5rMlUaYlSwsqdG5CNqCKgE9OmliRRUWzN2JGSUuOpQVtHc0dgKkmlKpJFQfhrS7pSDrzabJcpDT822iVKQtBEvctpyiDVKS42pKikH2E01RtxOIdEJkYFZ8rxfF8swvJsVu8Ftu0ZLAdi3JuOPAcO5PyrS6jaoLQoBSVdwQDoRDThRVI6saqEsQ4ekSzdrFFGO2+0Q0ssvZvLtcaZkgbiNlltmGXGUx2lKTQuSFpcWo90lQCgNw3Lh6pE+JLlS0IWg0IiI4AMPRNTizHMb4+ly7djDJ8vIdDk2cRvkSnvxPSHVfM4smtST8KDUjERVykZKlLhfvDhoJ+ZSgCXahIH2UV10ToUpcxyjZFp5sUV1UkfMCa9q9NUSyIBJbLc8YlQ0stvq3JQAQQKdPZUaTOdEYilSxmTrMedESpJZlqbLia/MNiwofeNI7iLQtkq7qwQVvSFUp1VWiPt7011FndCd5yaDDSKPoKu4oanvqnZRnQRec8adjustPFslNC64oAdRTsK6AyRAJLRMgEN6WqMsqKioFaahKt3t66VqRMstgywWyc489EakhZohK1EEK9/TQiajInuecuyUr8UbCrsnd2/w1DJRkrL9eHnkOALIB60rUDQkq0o7lcxRTa3wrr1SOpJ92s80wFBSXil9awBsWRubPuBr01nRq8rk/kPy+Zgu7/8Aiqsbf467RWUIEurt+3HfFe3UP4k/36AurCC5r13KFAQ1JUB0JUmp/q0uToghgO34rcBjKCfxElP3UVpStYY67oHSPBJqepqnof36gVFF/iXJTYDkcocSjqVFBKv6q6NUlTkbt6MxJaiyAgIIQlKk0PXuSD/HQSVhK24vXgrUExHArr1Ck/vPXSZoghdLt98df/Vd8WooN6a0p8a6y5o6r//Z"
                  }
                  alt="recent"
                />
              </Link>
            </div>
            <div className="recent-text">
              <h4>
                <Link to="/blog-single">
                  How to set goals for you and your team{" "}
                </Link>
              </h4>
            </div>
          </li>
          <li>
            <div className="recent-img">
              <Link to="/blog-single">
                <img
                  src={
                    "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QO8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBSaWdodHM6TWFya2VkPSJGYWxzZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFERDczQjk4NEQ0RkU2MTFCRTFDRDk3RTUzMjQwQTJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRFRjJBQzhFRDhCRTExRTZBRUJCOUFCOTZCRTc5QkJFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRFRjJBQzhERDhCRTExRTZBRUJCOUFCOTZCRTc5QkJFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZDNUMzQUE0MTZBN0U2MTFBOTI3OEJEMTY3NzRBNDBFIiBzdFJlZjpkb2N1bWVudElEPSJ4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"
                  }
                  alt="recent"
                />
              </Link>
            </div>
            <div className="recent-text">
              <h4>
                <Link to="/blog-single">The best ways to pay Drivers</Link>
              </h4>
            </div>
          </li>
          <li>
            <div className="recent-img">
              <Link to="/blog-single">
                <img
                  src={
                    "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QO8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBSaWdodHM6TWFya2VkPSJGYWxzZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFERDczQjk4NEQ0RkU2MTFCRTFDRDk3RTUzMjQwQTJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyNDYyMzFERDhCRTExRTZCRDU1OTQwRUU4REUxMDQ2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyNDYyMzFDRDhCRTExRTZCRDU1OTQwRUU4REUxMDQ2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZDNUMzQUE0MTZBN0U2MTFBOTI3OEJEMTY3NzRBNDBFIiBzdFJlZjpkb2N1bWVudElEPSJ4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"
                  }
                  alt="recent"
                />
              </Link>
            </div>
            <div className="recent-text">
              <h4>
                <Link to="/blog-single">
                  the sky love three boys of his own.{" "}
                </Link>
              </h4>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar-widget">
        <h3>{t("blog_page.archive")}</h3>
        <ul className="service-menu">
          <li>
            <Link to="/" onClick={onClick}>
              Mar - 2023 <span>(26)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Feb - 2023 <span>(12)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Jan - 2023 <span>(23)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Des - 2022 <span>(25)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Nov - 2022 <span>(13)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
