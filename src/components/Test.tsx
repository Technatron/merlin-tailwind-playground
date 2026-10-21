
import Card from "./Card"
import LetterJumpingWrapper from "./LetterJumpingWrapper"


const Test = () => {
  return (
    <div className='w-screen min-h-fit bg-slate-600 h-screen flex justify-center items-center gap-4 flex-wrap'>
        <Card styling="bg-purple-500">
            <LetterJumpingWrapper text="The Future" styling="font-thunder text-5xl uppercase font-extrabold transition "/>
            <div className="flex justify-between gap-1">
                <LetterJumpingWrapper text="This is a random sentence I am using to test the Effect" styling="hover:text-white "/>
            </div>
        </Card>
        <Card styling="bg-green-500">
            <LetterJumpingWrapper text="The Future" styling="font-thunder text-5xl uppercase font-extrabold transition "/>
            <div className="flex justify-between gap-1">
                <LetterJumpingWrapper text="This is a random sentence I am using to test the Effect" styling="hover:text-white "/>
            </div>
        </Card>
        <Card styling="bg-blue-500">
            <LetterJumpingWrapper text="The Future" styling="font-thunder text-5xl uppercase font-extrabold transition "/>
            <div className="flex justify-between gap-1">
                <LetterJumpingWrapper text="This is a random sentence I am using to test the Effect" styling="hover:text-white "/>
            </div>
        </Card>
        <Card styling="bg-orange-500">
            <LetterJumpingWrapper text="The Future" styling="font-thunder text-5xl uppercase font-extrabold transition "/>
            <div className="flex justify-between gap-1">
                <LetterJumpingWrapper text="This is a random sentence I am using to test the Effect" styling="hover:text-white "/>
            </div>
        </Card>
        <Card styling="bg-red-500">
            <LetterJumpingWrapper text="The Future" styling="font-thunder text-5xl uppercase font-extrabold transition "/>
            <div className="flex justify-between gap-1">
                <LetterJumpingWrapper text="This is a random sentence I am using to test the Effect" styling="hover:text-white "/>
            </div>
        </Card>
        <Card styling="bg-pink-300">
            <LetterJumpingWrapper text="The Future" styling="font-thunder text-5xl uppercase font-extrabold transition "/>
            <div className="flex justify-between gap-1">
                <LetterJumpingWrapper text="This is a random sentence I am using to test the Effect" styling="hover:text-white "/>
            </div>
        </Card>
        <Card styling="bg-green-300">
            <LetterJumpingWrapper text="The Future" styling="font-thunder text-5xl uppercase font-extrabold transition "/>
            <div className="flex justify-between gap-1">
                <LetterJumpingWrapper text="This is a random sentence I am using to test the Effect" styling="hover:text-white "/>
            </div>
        </Card>
        <Card styling="bg-blue-300">
            <LetterJumpingWrapper text="The Future" styling="font-thunder text-5xl uppercase font-extrabold transition "/>
            <div className="flex justify-between gap-1">
                <LetterJumpingWrapper text="This is a random sentence I am using to test the Effect" styling="hover:text-white "/>
            </div>
        </Card>
    </div>
  )
}

export default Test