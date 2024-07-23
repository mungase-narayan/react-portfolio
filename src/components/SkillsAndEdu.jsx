import React from 'react'

const SkillsAndEdu = () => {
  return (
    <div>
        <h2 class="text-3xl font-bold text-center mt-12 mb-8">
                    My Experience
                </h2>
                <div class="relative">
                    <div class="flex flex-col items-center">
                        <div class="h-full border-l-2 border-zinc-300 absolute transform -translate-x-1/2"></div>
                        <div className=" flex flex-col items-center justify-center space-y-6">
                        <div class="z-50">
                            <div class="bg-green-200 p-4 rounded-lg shadow-lg hover:bg-green-300 transition duration-200">
                                <h4 class="font-semibold">2014-2015</h4>
                                <p>Senior JavaScript Developer</p>
                            </div>
                        </div>
                        <div class="z-50">
                            <div class="bg-blue-200 p-4 rounded-lg shadow-lg hover:bg-blue-300 transition duration-200">
                                <h4 class="font-semibold">2014-2015</h4>
                                <p>Senior WordPress Developer</p>
                            </div>
                        </div>
                        <div class="z-50">
                            <div class="bg-purple-200 p-4 rounded-lg shadow-lg hover:bg-purple-300 transition duration-200">
                                <h4 class="font-semibold">2016-2017</h4>
                                <p>UI/UX Designer sns  kndslnv</p>
                            </div>
                        </div>
                        <div class="z-50">
                            <div class="bg-pink-200 p-4 rounded-lg shadow-lg hover:bg-pink-300 transition duration-200">
                                <h4 class="font-semibold">2017-2018</h4>
                                <p>Freelancer and ThemeForest</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default SkillsAndEdu