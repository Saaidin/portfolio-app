import Image from "next/image"
import { aboutMeData } from "./data/data"
export default function AboutMePage() {
  return (
    <main className="flex flex-col items-center mb-32">
      {/* circle pic + wording  */}
      <section className="flex flex-col sm:flex-row sm:w-10/12 mt-10 mb-6 items-center w-full mx-auto">
        <div className="sm:w-1/3 w-full flex justify-center">
          <Image
            src="/assets/sbme1.png"
            width={640}
            height={960}
            alt=""
            priority
            className="profileImage"
          />
        </div>
        <div className="sm:ml-20 sm:mt-0 sm:w-2/3 w-full mt-6  ml-0">
          <h2 className="sm:text-base w-10/12 sm:w-full mx-auto sm:mx-0 mb-2">
            {aboutMeData.title}
          </h2>
          <p className="sm:text-base w-10/12 sm:w-full mx-auto sm:mx-0">
            {aboutMeData.body}
          </p>
        </div>
      </section>
      {/* wording ~ in the middle */}
      <section className="w-10/12 my-8 bg-blueLight p10 h-full">
        <p>{aboutMeData.highlightedBody}</p>
      </section>

      {/* wording on top + image at bottom  */}
      <section className="flex flex-col sm:flex-row sm:w-10/12 mt-10 items-center w-full">
        <div className="flex flex-col sm:w-7/12 w-full">
          <p className="w-10/12 sm:w-full mx-auto mb-5 sm:mb-0">
            {aboutMeData.body2}
          </p>
        </div>
        <div className="w-10/12 sm:w-5/12 sm:ml-10 ml-0">
          <Image
            src="/assets/img-2.jpg"
            width={500}
            height={250}
            alt=""
            priority
            className="h-250 object-cover w-500"
          />
        </div>
      </section>
    </main>
  )
}
