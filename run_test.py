import argparse
import datetime
import subprocess

dt_now = datetime.datetime.now()
now = dt_now.strftime("%Y%m%d%H%M%S")

parser = argparse.ArgumentParser()

parser = argparse.ArgumentParser()
parser.add_argument("-c", "--count", help="loop count")
parser.add_argument("-s", "--screenshot", help="screenshot directory")
cmds = parser.parse_args()

browsers = ["chrome"]


count = int(cmds.count)

for browser in browsers:
    print("browser:" + browser)
    for i in range(count):
        print("count:" + str(i + 1))
        cmd = ["node", "control_test.js"]
        cmd.extend([browser, cmds.screenshot])

        p = subprocess.Popen(cmd, stdout=subprocess.PIPE,
                             stderr=subprocess.PIPE)
        fn = "out_" + now + ".txt"
        with open(fn, mode="a") as f:
            f.write("\n\n")
            f.write("==== count " + str(i + 1) +
                    " =============================\n")
            f.write("==== device " + browser +
                    " =============================\n")
            for l in p.stdout:
                l = l.decode("utf-8").strip()
                f.write(l + "\n")
                print(l)
            f.write("==== count " + str(i + 1) +
                    " =============================\n")
        ret = p.wait()
