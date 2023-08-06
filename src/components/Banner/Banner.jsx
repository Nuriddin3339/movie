import Button from "../../Button/Button"
import SearchInput from "../../SearchInput/SearchInput"

const   Banner = () => {
  return (
    <div className="h-[400px] bg-banner w-[1519px] ml-[-16px] bg-cover mt-[-16px]">
            <div className="flex flex-col gap-10 px-10 py-10">
                  <div className="text-white">
                    <h2 className="font-bold text-5xl">Welcome.</h2>
                    <h2 className="font-semibold text-4xl leading-1">Millions of movies, TV shows and people to discover.Explore now</h2>
                  </div>
                <div className="relative">
                    <SearchInput />
                    <div className="absolute top-0 right-0">
                      <Button />
                    </div>
                  </div>
            </div>
        </div>
  )
}

export default Banner